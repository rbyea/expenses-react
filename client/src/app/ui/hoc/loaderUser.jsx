import React from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/usersSlice";
// import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const LoaderUser = ({ children }) => {
  // const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn());

  React.useEffect(() => {
    console.log("user", isLoggedIn);
  }, []);

  return children;
};

LoaderUser.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LoaderUser;
