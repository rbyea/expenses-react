import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: 0,
  isLoading: false,
  error: null,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    // balanceRequested: (state) => {
    //   state.isLoading = true;
    // },
    // balanceReceived: (state, action) => {
    //   state.entities = action.payload;
    //   state.isLoading = false;
    // },
    balanceAdd: (state, action) => {
      state.entities += action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer: balanceReducer } = balanceSlice;

const { balanceAdd } = actions;

export const addMoneyInBalance = (money) => async (dispatch) => {
  dispatch(balanceAdd(money));
};

export const getBalance = () => (state) => state.balance.entities;

export default balanceReducer;
