import React from "react";
import styles from "./popupWallet.module.css";
import { FaTimes } from "react-icons/fa";
import SelectField from "../Form/selectField";
import { validator } from "../../utils/validator";
import InputField from "../Form/InputField";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserId } from "../../store/usersSlice";
import { createIncome } from "../../store/incomeSlice";
import PropTypes from "prop-types";

const PopupWallet = ({ handleClose, close }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserId());
  const [error, setError] = React.useState({});
  const [data, setData] = React.useState({
    type: "",
    number: "",
    description: "",
    userId: currentUser,
  });
  const typeList = [
    {
      value: "ddqwj123kldqhwklldqw",
      label: "Доход",
    },
    {
      value: "dqwdn123mb12kjdbqwkdjb",
      label: "Расход",
    },
  ];

  const validatorConfig = {
    type: {
      isRequired: {
        message: "Поле обязательна для заполнения!",
      },
    },
    number: {
      isRequired: {
        message: "Поле обязательна для заполнения!",
      },
    },
    description: {
      isRequired: {
        message: "Поле обязательна для заполнения!",
      },
    },
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
      [target.name]: target.value,
    }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;
    dispatch(createIncome(data));
  };

  return (
    <>
      {close && (
        <div className={styles.popupDefault}>
          <div className={styles.popupContainer}>
            <a href="#" onClick={handleClose} className={styles.popupClose}>
              <FaTimes />
            </a>

            <div className={styles.popupContent}>
              <h3 className={styles.center}>Добавить транзакции</h3>

              <form className={styles.popupForm} onSubmit={onSubmitForm}>
                <div className={styles.item}>
                  <SelectField
                    label="Тип транзакции"
                    error={error.type}
                    onChange={handleChange}
                    value={data.type}
                    options={typeList}
                    name="type"
                  />
                </div>

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

                {data.type === "ddqwj123kldqhwklldqw" ? (
                  <div className={styles.item}>
                    <InputField
                      type="text"
                      placeholder="Описание"
                      value={data.description}
                      error={error.description}
                      name="description"
                      onChange={handleChange}
                    />
                  </div>
                ) : (
                  ""
                )}

                <button className="btn custom-btn" type="submit">
                  Добавить транзакцию
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PopupWallet.propTypes = {
  handleClose: PropTypes.func.isRequired,
  close: PropTypes.bool.isRequired,
};

export default PopupWallet;
