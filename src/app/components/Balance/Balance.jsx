import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMoneyInBalance, getBalance } from "../../store/balanceSlice";

const Balance = (props) => {
  const dispatch = useDispatch();
  const currentBalance = useSelector(getBalance());
  console.log(currentBalance);

  const handleButton = (money) => {
    dispatch(addMoneyInBalance(money));
  };

  return (
    <div className="custom-block custom-block-balance">
      <small>Твой Баланс</small>

      <h2 className="mt-2 mb-3">{currentBalance} ₽</h2>

      <div className="custom-block-numbers d-flex align-items-center">
        <p>Тинькоф</p>
      </div>

      <div className="d-flex">
        <div className="ms-auto">
          <small>владелец карты</small>
          <p>Thomas</p>
        </div>
      </div>

      <button onClick={() => handleButton(100)}>knopka</button>
    </div>
  );
};

export default Balance;
