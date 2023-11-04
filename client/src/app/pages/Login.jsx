import React from "react";
import InputField from "../ui/Form/InputField";
import { validator } from "../utils/validator";

const Login = (props) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState({});

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения!",
      },
      isEmail: {
        message: "Почта введена некорректно",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения!",
      },
    },
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(error).length === 0;

  const handleChange = (target) => {
    console.log(target);
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    // const redirect = "/";

    const isValid = validate();

    if (!isValid) return;

    console.log(data);
  };
  return (
    <div className="row my-4">
      <div className="col-lg-12 col-12">
        <div className="custom-block bg-white">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="true"
              >
                Войти
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="password-tab"
                data-bs-toggle="tab"
                data-bs-target="#password-tab-pane"
                type="button"
                role="tab"
                aria-controls="password-tab-pane"
                aria-selected="false"
              >
                Регистрация
              </button>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex="0"
            >
              <form
                className="custom-form profile-form"
                onSubmit={onSubmitForm}
              >
                <InputField
                  type="email"
                  value={data.email}
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  error={error.email}
                />

                <input
                  className="form-control"
                  type="text"
                  name="profile-name"
                  id="profile-name"
                  placeholder="John Doe"
                />

                <input
                  className="form-control"
                  type="email"
                  name="profile-email"
                  id="profile-email"
                  placeholder="Johndoe@gmail.com"
                />

                <div className="input-group mb-1">
                  <img
                    src="images/profile/senior-man-white-sweater-eyeglasses.jpg"
                    className="profile-image img-fluid"
                    alt=""
                  />

                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                </div>

                <div className="d-flex">
                  <button type="button" className="form-control me-3">
                    Reset
                  </button>

                  <button
                    disabled={!isValid}
                    type="submit"
                    className="form-control ms-2"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>

            <div
              className="tab-pane fade"
              id="password-tab-pane"
              role="tabpanel"
              aria-labelledby="password-tab"
              tabIndex="0"
            >
              <h6 className="mb-4">Password</h6>

              <form
                className="custom-form password-form"
                action="#"
                method="post"
                role="form"
              >
                <input
                  type="password"
                  name="password"
                  id="password"
                  pattern="[0-9a-zA-Z]{4,10}"
                  className="form-control"
                  placeholder="Current Password"
                  required=""
                />

                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  pattern="[0-9a-zA-Z]{4,10}"
                  className="form-control"
                  placeholder="New Password"
                  required=""
                />

                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  pattern="[0-9a-zA-Z]{4,10}"
                  className="form-control"
                  placeholder="Confirm Password"
                  required=""
                />

                <div className="d-flex">
                  <button type="button" className="form-control me-3">
                    Reset
                  </button>

                  <button type="submit" className="form-control ms-2">
                    Update Password
                  </button>
                </div>
              </form>
            </div>

            <div
              className="tab-pane fade"
              id="notification-tab-pane"
              role="tabpanel"
              aria-labelledby="notification-tab"
              tabIndex="0"
            >
              <h6 className="mb-4">Notification</h6>

              <form
                className="custom-form notification-form"
                action="#"
                method="post"
                role="form"
              >
                <div className="form-check form-switch d-flex mb-3 ps-0">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckCheckedOne"
                  >
                    Account activity
                  </label>

                  <input
                    className="form-check-input ms-auto"
                    type="checkbox"
                    name="form-check-input"
                    role="switch"
                    id="flexSwitchCheckCheckedOne"
                  />
                </div>

                <div className="form-check form-switch d-flex mb-3 ps-0">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckCheckedTwo"
                  >
                    Payment updated
                  </label>

                  <input
                    className="form-check-input ms-auto"
                    type="checkbox"
                    name="form-check-input"
                    role="switch"
                    id="flexSwitchCheckCheckedTwo"
                  />
                </div>

                <div className="d-flex mt-4">
                  <button type="button" className="form-control me-3">
                    Reset
                  </button>

                  <button type="submit" className="form-control ms-2">
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
