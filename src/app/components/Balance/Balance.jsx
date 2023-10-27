import React from "react";

const Balance = (props) => {
  return (
    <div className="custom-block custom-block-balance">
      <small>Твой Баланс</small>

      <h2 className="mt-2 mb-3">254,800 ₽</h2>

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
