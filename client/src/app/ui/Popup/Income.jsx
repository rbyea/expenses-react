import React from "react";
import InputField from "../Form/InputField";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserId } from "../../store/usersSlice";
import { createIncome } from "../../store/incomeSlice";
import styles from "./popupWallet.module.css";
import { validator } from "../../utils/validator";
import { closePopup } from "../../store/popupSlice";
import TextareaField from "../Form/TextareaField";

const Income = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserId());
  const [error, setError] = React.useState({});
  const [data, setData] = React.useState({
    type: "доход",
    number: "",
    description: "",
    userId: currentUser
  });

  const validatorConfig = {
    type: {
      isRequired: {
        message: "Поле обязательна для заполнения!"
      }
    },
    number: {
      isRequired: {
        message: "Поле обязательна для заполнения!"
      }
    },
    description: {
      isRequired: {
        message: "Поле обязательна для заполнения!"
      }
    }
  };
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;
    dispatch(createIncome(data));
    dispatch(closePopup());
  };

  return (
    <form className={styles.popupForm} onSubmit={onSubmitForm}>
      <div className={styles.item}>
        <InputField
          type="number"
          placeholder="Сумма"
          value={data.number}
          error={error.number}
          name="number"
          onChange={handleChange}
        />
      </div>
      <div className={styles.item}>
        <TextareaField
          label="Описание транзации"
          placeholder="Введите описание"
          value={data.description}
          error={error.description}
          name="description"
          onChange={handleChange}
        />
      </div>

      <button className="btn custom-btn" type="submit">
        Добавить транзакцию
      </button>
    </form>
  );
};

export default Income;
