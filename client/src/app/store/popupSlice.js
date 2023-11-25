import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statusPopupWaller: false,
  statusPopupEdit: false,
  itemId: null
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
    },
    itemId: (state, action) => {
      state.itemId = action.payload;
    }
  }
});

const { actions, reducer: popupReducer } = popupSlice;

const {
  popupOpenWallet,
  popupCloseWallet,
  popupOpenEdit,
  popupCloseEdit,
  itemId
} = actions;

export const addItemId = (id) => (dispatch) => {
  dispatch(itemId(id));
};

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
export const getItemId = () => (state) => state.popup.getItemId;

export default popupReducer;
