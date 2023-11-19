import React from "react";
import { useSelector } from "react-redux";
import { getExpensesList } from "../../store/expensesSlice";
import { getIncomeList } from "../../store/incomeSlice";

const TableBody = (props) => {
  const expensesList = useSelector(getExpensesList());
  const incomeList = useSelector(getIncomeList());

  const globalArray = [...expensesList, ...incomeList];
  const corArray = globalArray?.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  return (
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
            <td scope="row">{el.category || ""}</td>
            <td
              className={el.type === "расход" ? "text-danger" : "text-success"}
              scope="row"
            >
              <span className="me-1">{el.type === "расход" ? "-" : "+"}</span>
              {el.number}
            </td>
            <td scope="row">Компонент ред.</td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
