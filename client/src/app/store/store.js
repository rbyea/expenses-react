import { combineReducers, configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";
import usersReducer from "./usersSlice";
import incomeReducer from "./incomeSlice";
import expensesReducer from "./expensesSlice";
import popupReducer from "./popupSlice";

const rootReducer = combineReducers({
  balance: balanceReducer,
  users: usersReducer,
  income: incomeReducer,
  expenses: expensesReducer,
  popup: popupReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: true
  });
}
