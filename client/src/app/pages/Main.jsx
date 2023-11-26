import React from "react";
import Balance from "../components/Balance/Balance";
import TableChart from "../components/Charts/TableChart";
import CircleCharts from "../components/Charts/CircleCharts";
import ProfileBlock from "../components/ProfileBlock/ProfileBlock";
import Transations from "../components/Transations/Transations";
import LastUsers from "../components/LastUsers/LastUsers";
import Footer from "../components/Footer/Footer";
import BarCharts from "../components/Charts/BarCharts";
import { useSelector } from "react-redux";
import { getExpensesList } from "../store/expensesSlice";
import { getIncomeList } from "../store/incomeSlice";

const Main = (props) => {
  const expensesList = useSelector(getExpensesList());
  const incomeList = useSelector(getIncomeList());

  console.log(expensesList?.length, incomeList?.length);
  return (
    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
      <div className="title-group mb-3">
        <h1 className="h2 mb-0">Главная</h1>
      </div>

      <div className="row my-4">
        <div className="col-lg-7 col-12">
          <Balance />

          {expensesList?.length !== 0 || incomeList?.length !== 0 ? (
            <>
              <div className="custom-block bg-white">
                <h5 className="mb-4">
                  Общая история доходов и расходов текущего года
                </h5>
                <TableChart />
              </div>

              <div className="custom-block bg-white">
                <h5 className="mb-4">История текущего месяца</h5>
                <CircleCharts />
              </div>
            </>
          ) : (
            <h5 className="mb-4">
              Добавьте свой доход, что бы увидеть начальные графики
            </h5>
          )}

          {incomeList?.length > 0 ? (
            expensesList?.length === 0 ? (
              <h5>
                Добавьте свой первый расход, что бы увидеть график расходов
              </h5>
            ) : (
              <div className="custom-block bg-white">
                <h5 className="mb-4">История затрат выбранной даты</h5>
                <BarCharts />
              </div>
            )
          ) : (
            ""
          )}
        </div>

        <div className="col-lg-5 col-12">
          <ProfileBlock />
          {incomeList?.length !== 0 && expensesList?.length !== 0 ? (
            <Transations />
          ) : (
            ""
          )}
          <LastUsers />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
