import { useSelector, useDispatch } from "react-redux";
import { getIsLoggedIn, loadUsersList } from "../../store/usersSlice";
import PropTypes from "prop-types";
import React from "react";

const LoaderUser = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());

  console.log(isLoggedIn);

  React.useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadUsersList());
    }
  }, [isLoggedIn]);

  return children;
};

LoaderUser.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LoaderUser;
