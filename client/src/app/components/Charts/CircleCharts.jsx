import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getExpensesList } from "../../store/expensesSlice";
import { getIncomeList } from "../../store/incomeSlice";

const CircleCharts = (props) => {
  const expensesArray = useSelector(getExpensesList());
  const incomeArray = useSelector(getIncomeList());

  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const expensesSortedArray = [];
  const incomeSortedArray = [];

  const sortArray = (array, newArray) => {
    const result = array.filter((el) => {
      const arrayDate = new Date(el.updatedAt);
      const arrayMonth = arrayDate.getMonth() + 1;
      const dateYear = arrayDate.getFullYear();

      return arrayMonth === month && dateYear === year;
    });

    newArray.push(...result);
  };

  if (expensesArray && incomeArray) {
    sortArray(expensesArray, expensesSortedArray);
    sortArray(incomeArray, incomeSortedArray);
  }

  const expBalance = expensesSortedArray?.reduce(
    (total, obj) => total + +obj.number,
    0
  );

  const incBalance = incomeSortedArray?.reduce(
    (total, obj) => total + +obj.number,
    0
  );

  if (!incBalance && !expBalance) {
    return "Вы не добавили доход в этом месяце";
  }

  const state = {
    series: [incBalance || 0, expBalance || 0],
    chart: {
      width: 380,
      type: "pie"
    },
    labels: ["Доходы", "Расходы"],
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
