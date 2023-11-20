import { useSelector, useDispatch } from "react-redux";
import {
  getIsLoggedIn,
  getLoadingUsers,
  loadUsersList
} from "../../store/usersSlice";
import PropTypes from "prop-types";
import React from "react";
import Preloader from "../Preloader/Preloader";
import { loadIncomeList, loadingIncome } from "../../store/incomeSlice";
import { getExpensesLoading, loadingExpenses } from "../../store/expensesSlice";
import {
  getCategoriesLoadingStatus,
  loadingCategories
} from "../../store/categoriesSlice";

const LoaderUser = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const isLoadingUser = useSelector(getLoadingUsers());
  const isLoadingIncome = useSelector(loadingIncome());
  const isLoadingExpenses = useSelector(getExpensesLoading());
  const isLoadingCategories = useSelector(getCategoriesLoadingStatus());

  React.useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadUsersList());
      dispatch(loadingCategories());
      dispatch(loadIncomeList(isLoggedIn.userId));
      dispatch(loadingExpenses(isLoggedIn.userId));
    }
  }, [isLoggedIn]);

  if (
    isLoadingUser &&
    isLoadingIncome &&
    isLoadingExpenses &&
    isLoadingCategories
  ) {
    return <Preloader />;
  }

  return children;
};

LoaderUser.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default LoaderUser;
