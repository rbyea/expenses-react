import React from "react";
import Chart from "react-apexcharts";

const TableChart = (props) => {
  const options = {
    series: [
      {
        name: "Баланс",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Расходы",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Кредит",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Фев",
        "Мар",
        "Апр",
        "Май",
        "Июн",
        "Июл",
        "Авг",
        "Сен",
        "Окт",
      ],
    },
    yaxis: {
      title: {
        text: "₽ (рублей)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " ₽";
        },
      },
    },
  };
  return (
    <>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={350}
      />
    </>
  );
};

export default TableChart;
