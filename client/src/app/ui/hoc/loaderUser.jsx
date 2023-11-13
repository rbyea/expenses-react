import { useSelector, useDispatch } from "react-redux";
import {
  getIsLoggedIn,
  getLoadingUsers,
  loadUsersList,
} from "../../store/usersSlice";
import PropTypes from "prop-types";
import React from "react";
import Preloader from "../Preloader/Preloader";
import { loadIncomeList, loadingIncome } from "../../store/incomeSlice";

const LoaderUser = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const isLoadingUser = useSelector(getLoadingUsers());
  const isLoadingIncome = useSelector(loadingIncome());

  React.useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadUsersList());
      dispatch(loadIncomeList(isLoggedIn.userId));
    }
  }, [isLoggedIn]);

  if (isLoadingUser || isLoadingIncome) {
    return <Preloader />;
  }

  return children;
};

LoaderUser.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LoaderUser;
