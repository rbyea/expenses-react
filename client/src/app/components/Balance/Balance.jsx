import React from "react";
import { useSelector } from "react-redux";
import { getIncomeList } from "../../store/incomeSlice";
import { getExpensesList } from "../../store/expensesSlice";
import { totalBalance } from "../../utils/totalBalance";
import { getCurrentUser, getCurrentUserId } from "../../store/usersSlice";

const Balance = (props) => {
  const incomeBalance = useSelector(getIncomeList());
  const expensesBalance = useSelector(getExpensesList());
  const currentUserId = useSelector(getCurrentUserId());
  const currentUser = useSelector(getCurrentUser(currentUserId));

  return (
    <div className="custom-block custom-block-balance">
      <small>Твой Баланс</small>

      <h2 className="mt-2 mb-5">
        {totalBalance(incomeBalance, expensesBalance)} ₽
      </h2>

      <div className="d-flex">
        <div className="ms-auto">
          <small>владелец карты</small>
          {currentUser && <p>{currentUser.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Balance;
