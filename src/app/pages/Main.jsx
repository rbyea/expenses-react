import React from "react";
import Balance from "../components/Balance/Balance";
import TableChart from "../components/Charts/TableChart";
import CircleCharts from "../components/Charts/CircleCharts";
import ProfileBlock from "../components/ProfileBlock/ProfileBlock";
import Transations from "../components/Transations/Transations";
import LastUsers from "../components/LastUsers/LastUsers";
import Footer from "../components/Footer/Footer";

const Main = (props) => {
  return (
    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
      <div className="title-group mb-3">
        <h1 className="h2 mb-0">Главная</h1>

        <small className="text-muted">Hello Thomas, welcome back!</small>
      </div>

      <div className="row my-4">
        <div className="col-lg-7 col-12">
          <Balance />

          <div className="custom-block bg-white">
            <h5 className="mb-4">История</h5>
            <CircleCharts />
          </div>

          <div className="custom-block bg-white">
            <TableChart />
          </div>
        </div>

        <div className="col-lg-5 col-12">
          <ProfileBlock />
          <Transations />
          <LastUsers />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
