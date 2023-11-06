import React from "react";
import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

import { FaHome, FaWallet, FaUserCog, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { LogOut } from "../../store/usersSlice";

const SidebarMenu = (props) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleButton = (e) => {
    e.preventDefault();
    dispatch(LogOut());
  };

  const listMenu = [
    {
      _id: nanoid(),
      name: "Главная",
      icon: <FaHome className="me-2" />,
      link: "/",
    },
    {
      _id: nanoid(),
      name: "Кошелек",
      icon: <FaWallet className="me-2" />,
      link: "/wallet",
    },
    {
      _id: nanoid(),
      name: "Настройки",
      icon: <FaUserCog className="me-2" />,
      link: "/settings",
    },
  ];

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-3 d-md-block sidebar collapse"
    >
      <div className="position-sticky py-4 px-3 sidebar-sticky">
        <ul className="nav flex-column h-100">
          {listMenu.map((el) => (
            <li key={el._id} className="nav-item">
              <Link
                className={`nav-link ${el.link === pathname ? "active" : ""}`}
                to={el.link ? el.link : "/"}
              >
                {el.icon}
                {el.name}
              </Link>
            </li>
          ))}
          <li className="nav-item border-top mt-auto pt-2">
            <a className="nav-link" onClick={(e) => handleButton(e)} href="#">
              <FaSignOutAlt className="me-2" /> Выход
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
