import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import { getExpensesList } from "../../store/expensesSlice";

const BarCharts = () => {
  const expensesList = useSelector(getExpensesList());
  const categoriesList = useSelector(getCategories());

  const categoryExpenses = expensesList?.reduce((acc, expense) => {
    const category = categoriesList.find(
      (category) => category._id === expense.category
    );
    const categoryName = category ? category.label : "категория не найдена";
    const expenseNumber = Number(expense.number);

    if (acc[categoryName]) {
      acc[categoryName] += expenseNumber;
    } else {
      acc[categoryName] = expenseNumber;
    }

    return acc;
  }, {});

  const categoryNames = Object.keys(categoryExpenses);
  const categorySums = Object.values(categoryExpenses);

  const options = {
    series: [
      {
        data: categorySums
      }
    ],
    options: {
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: categoryNames
      }
    }
  };
  return (
    <>
      <Chart
        options={options.options}
        series={options.series}
        type="bar"
        height={350}
      />
    </>
  );
};

export default BarCharts;
