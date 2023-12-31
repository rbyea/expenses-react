import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoggedIn } from "../../store/usersSlice";
import HeaderProfile from "./HeaderProfile";
import PropTypes from "prop-types";

const Header = ({ setMobileMenuStatus, mobileMenuStatus }) => {
  const isLoggedIn = useSelector(getIsLoggedIn());

  const handleClickBurger = (e) => {
    e.preventDefault();

    setMobileMenuStatus();
  };

  return (
    <header className="navbar sticky-top flex-md-nowrap">
      <div className="col-md-3 col-lg-3 me-0 px-3 fs-6">
        <Link
          className="navbar-brand"
          to={`/${isLoggedIn ? isLoggedIn.userId : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box me-2"
            viewBox="0 0 16 16"
          >
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
          </svg>
          Мини-финансы
        </Link>
      </div>

      {isLoggedIn && (
        <>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            aria-expanded={mobileMenuStatus}
            onClick={(e) => handleClickBurger(e)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <HeaderProfile />
        </>
      )}
    </header>
  );
};

Header.propTypes = {
  setMobileMenuStatus: PropTypes.func,
  mobileMenuStatus: PropTypes.bool
};

export default Header;
