import { createSlice } from "@reduxjs/toolkit";
import incomeService from "../service/income.service";

const initialState = {
  entities: [],
  isLoading: true,
  error: null
};

const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    incomeRequested: (state) => {
      state.isLoading = true;
    },
    incomeReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    incomeRequestFailed: (state, action) => {
      state.isLoading = action.payload;
      state.error = action.payload;
      state.isLoading = false;
    },
    incomeCreatedReceived: (state, action) => {
      state.entities.push(action.payload);
      state.isLoading = false;
    }
  }
});

const { actions, reducer: incomeReducer } = incomeSlice;

const {
  incomeRequested,
  incomeReceived,
  incomeRequestFailed,
  incomeCreatedReceived
} = actions;

export const loadIncomeList = (userId) => async (dispatch) => {
  dispatch(incomeRequested());
  try {
    const { content } = await incomeService.get(userId);
    dispatch(incomeReceived(content));
  } catch (error) {
    dispatch(incomeRequestFailed(error.message));
  }
};

export const createIncome = (payload) => async (dispatch) => {
  dispatch(incomeRequested());
  try {
    const { content } = await incomeService.create(payload);
    dispatch(incomeCreatedReceived(content));
  } catch (error) {
    dispatch(incomeRequestFailed(error.message));
  }
};

export const loadingIncome = () => (state) => state.income.isLoading;
export const getIncomeList = () => (state) => state.income.entities;

export default incomeReducer;
