import React from "react";
import Balance from "../components/Balance/Balance";
import Transations from "../components/Transations/Transations";
import Footer from "../components/Footer/Footer";
import Pagination from "../ui/Pagination";
import Table from "../ui/Table/Table";
import { paginate } from "../utils/paginate";
import { getExpensesList } from "../store/expensesSlice";
import { getIncomeList } from "../store/incomeSlice";
import { useSelector } from "react-redux";
import HistoryEmpty from "../components/HistoryEmpty/HistoryEmpty";

const Wallet = (props) => {
  const expensesList = useSelector(getExpensesList());
  const incomeList = useSelector(getIncomeList());
  const globalArray = [...(expensesList || []), ...(incomeList || [])];
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 10;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const count = globalArray.length;

  const corArray = globalArray?.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );
  const itemsCrop = paginate(corArray, currentPage, pageSize);

  return (
    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
      {itemsCrop.length !== 0 ? (
        <>
          <div className="title-group mb-3">
            <h1 className="h2 mb-0">Кошелек</h1>
          </div>

          <div className="row my-4">
            <div className="col-lg-12 col-12">
              <div className="custom-block bg-white">
                <h5 className="mb-4">Действия по счету</h5>

                <div className="table-responsive">
                  {itemsCrop && <Table itemsCrop={itemsCrop} />}
                </div>

                <Pagination
                  itemsCount={count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>

            <div className="col-lg-7 col-12">
              <Balance />
            </div>

            <div className="col-lg-5 col-12">
              <Transations />
            </div>
          </div>
        </>
      ) : (
        <HistoryEmpty />
      )}

      <Footer />
    </main>
  );
};

export default Wallet;
