import React from "react";
import styles from "./popupWallet.module.css";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import SelectField from "../Form/selectField";
import { validator } from "../../utils/validator";
import { getExpensesList, updateExpenses } from "../../store/expensesSlice";
import { getIncomeList } from "../../store/incomeSlice";
import InputField from "../Form/InputField";
import TextareaField from "../Form/TextareaField";
import { getCurrentUserId } from "../../store/usersSlice";

const PopupEdit = ({ popupRef, handleClose, close, type, id }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserId());
  const categoriesList = useSelector(getCategories());
  const expensesList = useSelector(getExpensesList());
  const incomeList = useSelector(getIncomeList());
  const [error, setError] = React.useState({});
  const [data, setData] = React.useState({
    category: "",
    description: "",
    number: "",
    userId: currentUser || ""
  });

  const categories = categoriesList?.map(({ _id: value, ...rest }) => ({
    value,
    ...rest
  }));

  const validatorConfig = {
    category: {
      isRequired: {
        message: "Поле обязательна для заполнения!"
      }
    },
    description: {
      isRequired: {
        message: "Поле обязательна для заполнения!"
      }
    },
    number: {
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

  const expensesArray =
    type === "расход"
      ? expensesList?.filter((expense) => {
          return expense._id === id;
        })
      : [];
  const incomeArray =
    type === "доход"
      ? incomeList?.filter((income) => {
          return income._id === id;
        })
      : [];

  React.useEffect(() => {
    if (expensesArray?.length > 0) {
      setData((prevState) => ({
        ...prevState,
        type: "расход",
        _id: expensesArray[0]._id,
        category: expensesArray[0].category,
        description: expensesArray[0].description,
        number: expensesArray[0].number
      }));
    } else if (incomeArray?.length > 0) {
      setData(() => ({
        _id: incomeArray[0]._id,
        type: "доход",
        number: incomeArray[0].number,
        description: incomeArray[0].description
      }));
    }
  }, [id]);

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    if (expensesArray?.length > 0) {
      dispatch(updateExpenses(data));
    }

    console.log("data", data);
  };

  return (
    <>
      {close && (
        <div onClick={(e) => handleClose(e)} className={styles.popupDefault}>
          <div ref={popupRef} className={styles.popupContainer}>
            <a href="#" className={styles.popupClose}>
              <FaTimes />
            </a>

            <div className={styles.popupContent}>
              <h3 className={styles.center}>Редактировать</h3>

              <form className={styles.popupForm} onSubmit={onSubmitForm}>
                {type === "расход" && (
                  <div className={styles.item}>
                    <SelectField
                      label="Категория расхода"
                      error={error.category}
                      onChange={handleChange}
                      value={data.category}
                      options={categories}
                      name="category"
                    />
                  </div>
                )}
                <div className={styles.item}>
                  <InputField
                    type="number"
                    name="number"
                    placeholder="Введите сумму"
                    value={data.number}
                    error={error.number}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.item}>
                  <TextareaField
                    name="description"
                    placeholder="Введите описание"
                    value={data.description}
                    error={error.description}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn custom-btn" type="submit">
                  Обновить
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PopupEdit.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  popupRef: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  close: PropTypes.bool.isRequired
};

export default PopupEdit;
