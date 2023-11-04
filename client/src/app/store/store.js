import { combineReducers, configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balanceSlice";

const rootReducer = combineReducers({
  balance: balanceReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
}
