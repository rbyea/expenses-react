import React from "react";
import { useSelector } from "react-redux";
import { getIncomeList } from "../../store/incomeSlice";

const Balance = (props) => {
  const currentBalance = useSelector(getIncomeList());
  const sumBalance = currentBalance.reduce(
    (total, obj) => total + +obj.number,
    0,
  );

  return (
    <div className="custom-block custom-block-balance">
      <small>Твой Баланс</small>

      <h2 className="mt-2 mb-3">{sumBalance} ₽</h2>

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
