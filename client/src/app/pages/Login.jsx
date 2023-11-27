import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import {
  Link,
  useLocation,
  useParams
} from "react-router-dom/cjs/react-router-dom.min";
import { nanoid } from "nanoid";

const Login = () => {
  const { type } = useParams();
  const { pathname } = useLocation();

  const navTab = [
    { _id: nanoid(), name: "Войти", link: "/login" },
    { _id: nanoid(), name: "Регистрация", link: "/login/register" }
  ];

  return (
    <div className="my-4 login-page">
      <h2 className="h2-login">Авторизуйтесь для доступа к приложению</h2>
      <div className="col-lg-12 col-12">
        <div className="custom-block bg-white">
          <ul className="nav nav-tabs">
            {navTab.map((el) => (
              <li key={el._id} className="nav-item">
                <Link
                  to={el.link}
                  className={`nav-link ${pathname === el.link ? "active" : ""}`}
                  id="profile-tab"
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="tab-content">
            {!type ? <LoginForm /> : <RegistrationForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
