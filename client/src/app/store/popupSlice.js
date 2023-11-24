import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statusPopupWaller: false,
  statusPopupEdit: false
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupOpenWallet: (state) => {
      state.statusPopupWaller = true;
    },
    popupCloseWallet: (state) => {
      state.statusPopupWaller = false;
    },
    popupOpenEdit: (state) => {
      state.statusPopupEdit = true;
    },
    popupCloseEdit: (state) => {
      state.statusPopupEdit = false;
    }
  }
});

const { actions, reducer: popupReducer } = popupSlice;

const { popupOpenWallet, popupCloseWallet, popupOpenEdit, popupCloseEdit } =
  actions;

export const openPopup = () => (dispatch) => {
  dispatch(popupOpenWallet());
};
export const closePopup = () => (dispatch) => {
  dispatch(popupCloseWallet());
};

export const openPopupEdit = () => (dispatch) => {
  dispatch(popupOpenEdit());
};
export const closePopupEdit = () => (dispatch) => {
  dispatch(popupCloseEdit());
};

export const getStatusPopup = () => (state) => state.popup.statusPopupWaller;
export const getStatusPopupEdit = () => (state) => state.popup.statusPopupEdit;

export default popupReducer;
