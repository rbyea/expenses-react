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
    },
    incomeUpdate: (state, action) => {
      state.entities[
        state.entities.findIndex((income) => {
          return income._id === action.payload._id;
        })
      ] = action.payload;
      state.isLoading = false;
    },
    incomeDelete: (state, action) => {
      state.entities = state.entities.filter((income) => {
        return income._id !== action.payload;
      });
      state.isLoading = false;
    }
  }
});

const { actions, reducer: incomeReducer } = incomeSlice;

const {
  incomeRequested,
  incomeReceived,
  incomeRequestFailed,
  incomeCreatedReceived,
  incomeUpdate,
  incomeDelete
} = actions;

export const incomeDeleteItem = (id) => async (dispatch) => {
  dispatch(incomeRequested());
  try {
    const { content } = await incomeService.delete(id);
    if (!content) {
      dispatch(incomeDelete(id));
    }
  } catch (error) {
    dispatch(incomeRequestFailed(error.message));
  }
};

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

export const updateIncome = (payload) => async (dispatch) => {
  dispatch(incomeRequested());
  try {
    const { content } = await incomeService.update(payload);
    dispatch(incomeUpdate(content));
  } catch (error) {
    dispatch(incomeRequestFailed(error.message));
  }
};

export const loadingIncome = () => (state) => state.income.isLoading;
export const getIncomeList = () => (state) => state.income.entities;

export default incomeReducer;
