import React from "react";
import InputField from "../../ui/Form/InputField";
import { validator } from "../../utils/validator";
import { useDispatch } from "react-redux";
import { login } from "../../store/usersSlice";

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    email: "",
    password: ""
  });
  const [error, setError] = React.useState({});

  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения!"
      },
      isEmail: {
        message: "Почта введена некорректно"
      }
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения!"
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  // const isValid = Object.keys(error).length === 0;

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleReset = () => {
    setData(() => ({
      email: "",
      password: ""
    }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    const redirect = "/";

    dispatch(login({ payload: data, redirect }));
  };
  return (
    <form className="custom-form profile-form" onSubmit={onSubmitForm}>
      <InputField
        type="email"
        value={data.email}
        name="email"
        placeholder="Email"
        onChange={handleChange}
        error={error.email}
      />

      <InputField
        type="password"
        value={data.password}
        name="password"
        placeholder="Пароль"
        onChange={handleChange}
        error={error.password}
      />

      <div className="d-flex">
        <button
          type="button"
          onClick={handleReset}
          className="form-control me-3"
        >
          Сбросить
        </button>

        <button type="submit" className="form-control ms-2">
          Войти
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
