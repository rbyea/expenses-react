import React from "react";
import Balance from "../components/Balance/Balance";
import Transations from "../components/Transations/Transations";
import Footer from "../components/Footer/Footer";
import Pagination from "../ui/Pagination";
import Table from "../ui/Table/Table";

const Wallet = (props) => {
  return (
    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
      <div className="title-group mb-3">
        <h1 className="h2 mb-0">Кошелек</h1>
      </div>

      <div className="row my-4">
        <div className="col-lg-12 col-12">
          <div className="custom-block bg-white">
            <h5 className="mb-4">Действия по счету</h5>

            <div className="table-responsive">
              <Table />
            </div>

            <Pagination />
          </div>
        </div>

        <div className="col-lg-7 col-12">
          <Balance />
        </div>

        <div className="col-lg-5 col-12">
          <Transations />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Wallet;
