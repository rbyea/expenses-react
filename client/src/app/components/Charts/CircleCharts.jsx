import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getExpensesList } from "../../store/expensesSlice";
import { getIncomeList } from "../../store/incomeSlice";
import Preloader from "../../ui/Preloader/Preloader";

const CircleCharts = (props) => {
  const expensesArray = useSelector(getExpensesList());
  const incomeArray = useSelector(getIncomeList());

  const expBalance = expensesArray?.reduce(
    (total, obj) => total + +obj.number,
    0
  );

  const incBalance = incomeArray?.reduce(
    (total, obj) => total + +obj.number,
    0
  );

  // const currentDate = new Date();
  // const isEndOfMonth = currentDate.getDate() === 1;

  if (!incBalance && !expBalance) {
    return <Preloader />;
  }

  const state = {
    series: [incBalance || 0, expBalance || 0],
    chart: {
      width: 380,
      type: "pie"
    },
    labels: ["Баланс", "Расходы"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
  return (
    <>
      <Chart
        options={{
          chart: state.chart,
          labels: state.labels,
          responsive: state.responsive
        }}
        series={state.series}
        type="pie"
        width="500"
      />
    </>
  );
};

export default CircleCharts;
