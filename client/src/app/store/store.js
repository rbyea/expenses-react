import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import incomeReducer from "./incomeSlice";
import expensesReducer from "./expensesSlice";
import popupReducer from "./popupSlice";
import categoriesReducer from "./categoriesSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  income: incomeReducer,
  expenses: expensesReducer,
  popup: popupReducer,
  categories: categoriesReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: true
  });
}
