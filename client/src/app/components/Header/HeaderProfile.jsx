import React from "react";
import { getCurrentUser, getCurrentUserId } from "../../store/usersSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HeaderProfile = (props) => {
  const currentUserId = useSelector(getCurrentUserId());
  const currentUser = useSelector(getCurrentUser(currentUserId));

  return (
    <>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-nav me-lg-2">
        <div className="nav-item text-nowrap d-flex align-items-center">
          <div className="dropdown px-3">
            <Link
              className="nav-link dropdown-toggle nav-link-circle"
              to={`/settings/${currentUserId}`}
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {currentUser && Array.from(currentUser.name)[0]}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderProfile;
