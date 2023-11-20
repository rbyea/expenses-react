import { createSlice } from "@reduxjs/toolkit";
import categoriesService from "../service/categories.service";

const initialState = {
  entities: null,
  isLoading: false,
  error: null
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesRequested: (state) => {
      state.isLoading = true;
    },
    categoriesReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    categoriesRequestFailed: (state, action) => {
      state.isLoading = action.payload;
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { actions, reducer: categoriesReducer } = categoriesSlice;

const { categoriesRequested, categoriesReceived, categoriesRequestFailed } =
  actions;

export const loadingCategories = () => async (dispatch) => {
  dispatch(categoriesRequested());
  try {
    const { content } = await categoriesService.get();
    dispatch(categoriesReceived(content));
  } catch (error) {
    dispatch(categoriesRequestFailed(error.message));
  }
};

export const getCategoriesLoadingStatus = () => (state) =>
  state.categories.isLoading;
export const getCategories = () => (state) => state.categories.entities;

export default categoriesReducer;
