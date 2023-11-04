import React from "react";
import Chart from "react-apexcharts";

const CircleCharts = (props) => {
  const state = {
    series: [13, 43, 22],
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Баланс", "Расходы", "Кредит"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <>
      <Chart
        options={{
          chart: state.chart,
          labels: state.labels,
          responsive: state.responsive,
        }}
        series={state.series}
        type="pie"
        width="500"
      />
    </>
  );
};

export default CircleCharts;
