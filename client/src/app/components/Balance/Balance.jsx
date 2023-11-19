import React from "react";
import { useSelector } from "react-redux";
import { getIncomeList } from "../../store/incomeSlice";
import { getExpensesList } from "../../store/expensesSlice";
import { totalBalance } from "../../utils/totalBalance";

const Balance = (props) => {
  const incomeBalance = useSelector(getIncomeList());
  const expensesBalance = useSelector(getExpensesList());

  return (
    <div className="custom-block custom-block-balance">
      <small>Твой Баланс</small>

      <h2 className="mt-2 mb-3">
        {totalBalance(incomeBalance, expensesBalance)} ₽
      </h2>

      <div className="custom-block-numbers d-flex align-items-center">
        <p>Тинькоф</p>
      </div>

      <div className="d-flex">
        <div className="ms-auto">
          <small>владелец карты</small>
          <p>Thomas</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
