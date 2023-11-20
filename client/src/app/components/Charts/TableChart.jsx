import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getExpensesList } from "../../store/expensesSlice";
import { getIncomeList } from "../../store/incomeSlice";
import Preloader from "../../ui/Preloader/Preloader";

const TableChart = (props) => {
  const monthNames = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек"
  ];

  const expensesArray = useSelector(getExpensesList());
  const incomeArray = useSelector(getIncomeList());

  const monthlyExpenses = {};
  const monthlyIncome = {};

  const sortArray = (array, monthlyArray) => {
    array.forEach((item) => {
      const date = new Date(item.updatedAt);
      const month = date.getMonth() + 1;
      const sum = parseFloat(item.number);

      monthlyArray[month] = (monthlyArray[month] || 0) + sum;
    });
  };

  if (expensesArray && incomeArray) {
    sortArray(expensesArray, monthlyExpenses);
    sortArray(incomeArray, monthlyIncome);
  }

  const allMonths = new Set([
    ...Object.keys(monthlyExpenses),
    ...Object.keys(monthlyIncome)
  ]);

  allMonths.forEach((month) => {
    monthlyExpenses[month] = monthlyExpenses[month] || 0;
    monthlyIncome[month] = monthlyIncome[month] || 0;
  });

  const selectedMonthNames = Object.keys(monthlyExpenses).map(
    (month) => monthNames[month - 1]
  );

  if (!selectedMonthNames) {
    return <Preloader />;
  }

  const options = {
    series: [
      {
        name: "Доходы",
        data: Object.values(monthlyIncome)
      },
      {
        name: "Расходы",
        data: Object.values(monthlyExpenses)
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: selectedMonthNames
    },
    yaxis: {
      title: {
        text: "₽ (рублей)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " ₽";
        }
      }
    }
  };
  return (
    <Chart options={options} series={options.series} type="bar" height={350} />
  );
};

export default TableChart;
