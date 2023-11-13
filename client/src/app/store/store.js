import { combineReducers, configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";
import usersReducer from "./usersSlice";
import incomeReducer from "./incomeSlice";

const rootReducer = combineReducers({
  balance: balanceReducer,
  users: usersReducer,
  income: incomeReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
}
