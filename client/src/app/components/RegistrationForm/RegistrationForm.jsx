import React from "react";
import InputField from "../../ui/Form/InputField";
import { validator } from "../../utils/validator";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/usersSlice";

const RegistrationForm = (props) => {
  const dispatch = useDispatch();

  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const [error, setError] = React.useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleReset = () => {
    setData({
      name: "",
      email: "",
      password: "",
      phone: ""
    });
  };

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
    },
    name: {
      isRequired: {
        message: "Поле обязателено для заполнения!"
      }
    },
    phone: {
      isRequired: {
        message: "Поле обязателено для заполнения!"
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    const redirect = "/";
    dispatch(signUp({ payload: data, redirect }));
  };

  return (
    <form className="custom-form profile-form" onSubmit={onSubmitForm}>
      <InputField
        type="text"
        value={data.name}
        name="name"
        placeholder="Имя"
        onChange={handleChange}
        error={error.name}
      />

      <InputField
        type="email"
        value={data.email}
        name="email"
        placeholder="Email"
        onChange={handleChange}
        error={error.password}
      />

      <InputField
        type="password"
        value={data.password}
        name="password"
        placeholder="Пароль"
        onChange={handleChange}
        error={error.password}
      />

      <InputField
        type="text"
        value={data.phone}
        name="phone"
        placeholder="Телефон"
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
          Регистрация
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
