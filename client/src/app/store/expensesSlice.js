import { createSlice } from "@reduxjs/toolkit";
import expensesService from "../service/expenses.service";

const initialState = {
  entities: null,
  isLoading: null,
  error: null
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    expensesRequested: (state) => {
      state.isLoading = true;
    },
    expensesReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    expensesRequestFailed: (state, action) => {
      state.isLoading = action.payload;
      state.error = action.payload;
      state.isLoading = false;
    },
    expensesCreatedReceived: (state, action) => {
      state.entities.push(action.payload);
      state.isLoading = false;
    },
    expensesUpdateItem: (state, action) => {
      state.entities[
        state.entities.findIndex((ex) => ex._id === action.payload._id)
      ] = action.payload;
      state.isLoading = false;
    },
    expensesDeleteItem: (state, action) => {
      state.entities = state.entities.filter((expense) => {
        return expense._id !== action.payload;
      });
      state.isLoading = false;
    }
  }
});

const { actions, reducer: expensesReducer } = expensesSlice;

const {
  expensesReceived,
  expensesRequested,
  expensesRequestFailed,
  expensesCreatedReceived,
  expensesUpdateItem,
  expensesDeleteItem
} = actions;

export const deleteExpense = (id) => async (dispatch) => {
  dispatch(expensesRequested());
  try {
    const { content } = await expensesService.delete(id);
    if (!content) {
      dispatch(expensesDeleteItem(id));
    }
  } catch (error) {
    dispatch(expensesRequestFailed(error.message));
  }
};

export const loadingExpenses = (userId) => async (dispatch) => {
  dispatch(expensesRequested());
  try {
    const { content } = await expensesService.get(userId);
    dispatch(expensesReceived(content));
  } catch (error) {
    dispatch(expensesRequestFailed(error.message));
  }
};

export const createExpenses = (payload) => async (dispatch) => {
  dispatch(expensesRequested());
  try {
    const { content } = await expensesService.create(payload);
    dispatch(expensesCreatedReceived(content));
  } catch (error) {
    dispatch(expensesRequestFailed(error.message));
  }
};

export const updateExpenses = (payload) => async (dispatch) => {
  dispatch(expensesRequested());
  try {
    const { content } = await expensesService.update(payload);
    dispatch(expensesUpdateItem(content));
  } catch (error) {
    dispatch(expensesRequestFailed(error.message));
  }
};

export const getExpensesList = () => (state) => state.expenses.entities;
export const getExpensesLoading = () => (state) => state.expenses.isLoading;

export default expensesReducer;
