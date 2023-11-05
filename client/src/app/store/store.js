import { combineReducers, configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";
import usersReducer from "./usersSlice";

const rootReducer = combineReducers({
  balance: balanceReducer,
  users: usersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
}
