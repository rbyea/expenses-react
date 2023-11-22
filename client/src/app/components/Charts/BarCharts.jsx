import React from "react";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import { getExpensesList } from "../../store/expensesSlice";
import SelectField from "../../ui/Form/selectField";
import moment from "moment";

const BarCharts = () => {
  const expensesList = useSelector(getExpensesList());
  const categoriesList = useSelector(getCategories());
  const [dataSort, setData] = React.useState({
    categorySort: ""
  });

  const [newDataArray, setNewDataArray] = React.useState();
  const [resultData, setResultData] = React.useState([]);

  React.useEffect(() => {
    const tempResult = expensesList?.reduce((acc, item) => {
      const date = moment(item.updatedAt);
      const monthYear = date.format("MM-YYYY");

      if (!acc.find((x) => x.label === monthYear)) {
        acc.push({ value: item._id, label: monthYear });
      }

      return acc;
    }, []);
    if (tempResult) {
      setResultData(
        tempResult.sort((a, b) => {
          const yearA = a.label.split("-")[1];
          const yearB = b.label.split("-")[1];
          return yearB.localeCompare(yearA);
        })
      );
    }
  }, [expensesList]);

  React.useEffect(() => {
    if (dataSort.categorySort.length > 1) {
      const monthYear = dataSort.categorySort.split("-")[0];
      const year = parseInt(dataSort.categorySort.split("-")[1], 10);
      const resultFilter = expensesList?.filter((el) => {
        const arrayDate = new Date(el.updatedAt);
        const arrayMonth = arrayDate.getMonth() + 1;
        const arrayYear = arrayDate.getFullYear();

        return arrayMonth === parseInt(monthYear, 10) && arrayYear === year;
      });
      setNewDataArray(resultFilter);
    }

    console.log(newDataArray);
  }, [dataSort, expensesList]);

  const categoryExpenses = newDataArray?.reduce((acc, expense) => {
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

  const handleChange = (target) => {
    setData((pervState) => ({
      ...pervState,
      [target.name]: target.value
    }));
  };

  const categoryNames = categoryExpenses ? Object.keys(categoryExpenses) : [];
  const categorySums = categoryExpenses ? Object.values(categoryExpenses) : [];

  const options = {
    series: [
      {
        data: categorySums || 0
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
      dataSortLabels: {
        enabled: false
      },
      xaxis: {
        categories: categoryNames || ""
      }
    }
  };

  return (
    <>
      {resultData && (
        <SelectField
          label="Выборать дату"
          name="categorySort"
          value={dataSort.categorySort}
          onChange={handleChange}
          options={resultData}
          chart={true}
        />
      )}

      {dataSort.categorySort.length > 1 && (
        <Chart
          options={options.options}
          series={options.series}
          type="bar"
          height={350}
        />
      )}
    </>
  );
};

export default BarCharts;
