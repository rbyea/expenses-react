import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupOpen: (state) => {
      state.status = true;
    },
    popupClose: (state) => {
      state.status = false;
    }
  }
});

const { actions, reducer: popupReducer } = popupSlice;

const { popupOpen, popupClose } = actions;

export const openPopup = () => (dispatch) => {
  dispatch(popupOpen());
};
export const closePopup = () => (dispatch) => {
  dispatch(popupClose());
};

export const getStatusPopup = () => (state) => state.popup.status;

export default popupReducer;
