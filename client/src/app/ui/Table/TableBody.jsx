import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpensesList } from "../../store/expensesSlice";
import { getIncomeList } from "../../store/incomeSlice";
import { getCategories } from "../../store/categoriesSlice";
import { openPopupEdit } from "../../store/popupSlice";
import PropTypes from "prop-types";

const TableBody = ({ setIdEvent, setType }) => {
  const dispatch = useDispatch();
  const expensesList = useSelector(getExpensesList());
  const incomeList = useSelector(getIncomeList());
  const categoriesList = useSelector(getCategories());
  const globalArray = [...(expensesList || []), ...(incomeList || [])];
  const corArray = globalArray?.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  const handleButton = (e, id, type) => {
    e.preventDefault();

    setIdEvent(id);
    setType(type);
    dispatch(openPopupEdit());
  };

  return (
    <>
      <tbody>
        {corArray &&
          corArray.map((el) => (
            <tr key={el._id || el.updatedAt}>
              <td scope="row">{new Date(el.updatedAt).toLocaleDateString()}</td>
              <td scope="row">
                {new Date(el.updatedAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </td>
              <td scope="row">{el.description}</td>
              <td scope="row">{el.type}</td>
              <td scope="row">
                {
                  categoriesList?.find(
                    (category) => category._id === el.category
                  )?.label
                }
              </td>
              <td
                className={
                  el.type === "расход" ? "text-danger" : "text-success"
                }
                scope="row"
              >
                <span className="me-1">{el.type === "расход" ? "-" : "+"}</span>
                {el.number}
              </td>
              <td scope="row">
                <a
                  className="btn custom-btn"
                  onClick={(e) => handleButton(e, el._id, el.type)}
                  href="#"
                >
                  Редактировать
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

TableBody.propTypes = {
  setIdEvent: PropTypes.func,
  setType: PropTypes.func
};

export default TableBody;
