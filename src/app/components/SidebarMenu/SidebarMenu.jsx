import React from "react";
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid'

import {
  FaHome,
  FaWallet,
  FaUserCog,
  FaUserAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const SidebarMenu = (props) => {
  const listMenu = [
    {
      _id: nanoid(),
      name: "Главная",
      icon: <FaHome className="me-2"/>,
      link: "/"
    },
    {
      _id: nanoid(),
      name: "Кошелек",
      icon: <FaWallet className="me-2"/>,
      link: "wallet"
    },
    {
      _id: nanoid(),
      name: "Настройки",
      icon: <FaUserCog className="me-2"/>,
      link: "settings"
    },
    {
      _id: nanoid(),
      name: "Выход",
      icon: <FaSignOutAlt className="me-2"/>,
    },
  ];

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-3 d-md-block sidebar collapse"
    >
      <div className="position-sticky py-4 px-3 sidebar-sticky">
        <ul className="nav flex-column h-100">

          {
            listMenu.map(el => (
              <li key={el._id} className={el.name === "Выход" ? `nav-item border-top mt-auto pt-2` : 'nav-item'}>
                <Link className="nav-link" to={el.link ? el.link : "/"}>
                  {el.icon}
                  {el.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
