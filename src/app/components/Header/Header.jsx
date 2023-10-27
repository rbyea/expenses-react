import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="navbar sticky-top flex-md-nowrap">
      <div className="col-md-3 col-lg-3 me-0 px-3 fs-6">
        <Link className="navbar-brand" to="/">
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

      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <form
        className="custom-form header-form ms-lg-3 ms-md-3 me-lg-auto me-md-auto order-2 order-lg-0 order-md-0"
        action="#"
        method="get"
        role="form"
      >
        <input
          className="form-control"
          name="search"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>

      <div className="navbar-nav me-lg-2">
        <div className="nav-item text-nowrap d-flex align-items-center">
          <div className="dropdown ps-3">
            <a
              className="nav-link dropdown-toggle text-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="navbarLightDropdownMenuLink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
              <span className="position-absolute start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </a>

            <ul
              className="dropdown-menu dropdown-menu-lg-end notifications-block-wrap bg-white shadow"
              aria-labelledby="navbarLightDropdownMenuLink"
            >
              <small>Notifications</small>

              <li className="notifications-block border-bottom pb-2 mb-2">
                <a
                  className="dropdown-item d-flex  align-items-center"
                  href="#"
                >
                  <div className="notifications-icon-wrap bg-success">
                    <i className="notifications-icon bi-check-circle-fill"></i>
                  </div>

                  <div>
                    <span>Your account has been created successfuly.</span>

                    <p>12 days ago</p>
                  </div>
                </a>
              </li>

              <li className="notifications-block border-bottom pb-2 mb-2">
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="notifications-icon-wrap bg-info">
                    <i className="notifications-icon bi-folder"></i>
                  </div>

                  <div>
                    <span>Please check. We have sent a Daily report.</span>

                    <p>10 days ago</p>
                  </div>
                </a>
              </li>

              <li className="notifications-block">
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="notifications-icon-wrap bg-danger">
                    <i className="notifications-icon bi-question-circle"></i>
                  </div>

                  <div>
                    <span>Account verification failed.</span>

                    <p>1 hour ago</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown ps-1">
            <a
              className="nav-link dropdown-toggle text-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </a>

            <div className="dropdown-menu dropdown-menu-social bg-white shadow">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/search.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Google</span>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/spotify.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Spotify</span>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/telegram.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Telegram</span>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/snapchat.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Snapchat</span>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/tiktok.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Tiktok</span>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-4 col-4">
                    <a className="dropdown-item text-center" href="#">
                      <img
                        src="images/social/youtube.png"
                        className="profile-image img-fluid"
                        alt=""
                      />
                      <span className="d-block">Youtube</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown px-3">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="images/medium-shot-happy-man-smiling.jpg"
                className="profile-image img-fluid"
                alt=""
              />
            </a>
            <ul className="dropdown-menu bg-white shadow">
              <li>
                <div className="dropdown-menu-profile-thumb d-flex">
                  <img
                    src="images/medium-shot-happy-man-smiling.jpg"
                    className="profile-image img-fluid me-3"
                    alt=""
                  />

                  <div className="d-flex flex-column">
                    <small>Thomas</small>
                    <a href="#">thomas@site.com</a>
                  </div>
                </div>
              </li>

              <li>
                <a className="dropdown-item" href="profile.html">
                  <i className="bi-person me-2"></i>
                  Profile
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="setting.html">
                  <i className="bi-gear me-2"></i>
                  Settings
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="help-center.html">
                  <i className="bi-question-circle me-2"></i>
                  Help
                </a>
              </li>

              <li className="border-top mt-3 pt-2 mx-4">
                <a className="dropdown-item ms-0 me-0" href="#">
                  <i className="bi-box-arrow-left me-2"></i>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
