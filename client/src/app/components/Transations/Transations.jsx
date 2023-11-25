import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getCurrentUserId } from "../../store/usersSlice";
import { getExpensesList } from "../../store/expensesSlice";
import { getIncomeList } from "../../store/incomeSlice";

const Transations = (props) => {
  const currentUserId = useSelector(getCurrentUserId());

  const expensesTrans = useSelector(getExpensesList());
  const incomeTrans = useSelector(getIncomeList());

  const coreArray =
    expensesTrans && incomeTrans ? [...expensesTrans, ...incomeTrans] : null;

  if (coreArray) {
    coreArray.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }

  const lastThreeTransactions = coreArray && coreArray.slice(0, 3);

  return (
    <>
      <div className="custom-block custom-block-transations">
        <h5 className="mb-4">Недавние транзакции</h5>

        {lastThreeTransactions &&
          lastThreeTransactions.map((el) => (
            <div
              key={el.updatedAt}
              className="d-flex flex-wrap align-items-center mb-4"
            >
              <div className="d-flex align-items-center">
                <div>
                  <p>
                    <span>{el.type}</span>
                  </p>

                  <small className="text-muted">{el.description}</small>
                </div>
              </div>

              <div className="ms-auto transition-end">
                <small>{new Date(el.updatedAt).toLocaleDateString()}</small>
                <strong
                  className={`d-block ${
                    el.type === "расход" ? "text-danger" : "text-success"
                  }`}
                >
                  <span className="me-1">
                    {el.type === "расход" ? "-" : "+"}
                  </span>
                  {el.number}
                </strong>
              </div>
            </div>
          ))}

        <div className="border-top pt-4 mt-4 text-center">
          <Link className="btn custom-btn" to={`/history/${currentUserId}`}>
            Просмотреть все транзакции
            <FaFolderOpen />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Transations;
