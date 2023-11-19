import React from "react";
import { createExpenses, getExpensesList } from "../../store/expensesSlice";
import { getCurrentUserId } from "../../store/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./popupWallet.module.css";
import { validator } from "../../utils/validator";
import SelectField from "../Form/selectField";
import InputField from "../Form/InputField";
import { totalBalance } from "../../utils/totalBalance";
import { getIncomeList } from "../../store/incomeSlice";
import history from "../../utils/history";
import { closePopup } from "../../store/popupSlice";

const Expenses = (props) => {
  const incomeBalance = useSelector(getIncomeList());
  const expensesBalance = useSelector(getExpensesList());
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserId());
  const [error, setError] = React.useState({});
  const [data, setData] = React.useState({
    type: "расход",
    number: "",
    category: "",
    description: "",
    userId: currentUser
  });

  const categoryList = [
    {
      value: "dqwkndkjh123kj",
      label: "Продукты"
    },
    {
      value: "sadqwf123fqwf",
      label: "Медецины"
    },
    {
      value: "dqwkllqwkeh",
      label: "Развлечения"
    }
  ];
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
    category: {
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

    dispatch(createExpenses(data));
    history.push(`/history/${currentUser}`);
    dispatch(closePopup());
  };
  return (
    <>
      {totalBalance(incomeBalance, expensesBalance) === 0 ||
      totalBalance(incomeBalance, expensesBalance) < 0 ? (
        <h5>Вы на мели!</h5>
      ) : (
        <form className={styles.popupForm} onSubmit={onSubmitForm}>
          <div className={styles.item}>
            <SelectField
              label="Категория расхода"
              error={error.category}
              onChange={handleChange}
              value={data.category}
              options={categoryList}
              name="category"
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

          <button className="btn custom-btn" type="submit">
            Добавить транзакцию
          </button>
        </form>
      )}
    </>
  );
};

export default Expenses;
