import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import PopupEdit from "../Popup/popupEdit";
import { closePopupEdit, getStatusPopupEdit } from "../../store/popupSlice";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { deleteExpense } from "../../store/expensesSlice";
import { incomeDeleteItem } from "../../store/incomeSlice";
import { toast } from "react-toastify";
// import { getExpensesList } from "../../store/expensesSlice";

const Table = ({ itemsCrop }) => {
  const dispatch = useDispatch();
  const popupRef = React.useRef();
  const statusPopup = useSelector(getStatusPopupEdit());
  const [type, setType] = React.useState("");
  const [idEvent, setIdEvent] = React.useState();

  // const expensesList = useSelector(getExpensesList());

  const handleClose = (e) => {
    const { target } = e;

    if (target.className.includes("popupWallet_popupDefault__g6tLy")) {
      dispatch(closePopupEdit());
    } else if (target.className.includes("popupWallet_popupClose__zrmvO")) {
      dispatch(closePopupEdit());
    }
  };

  const handleDelete = (e, id, type) => {
    e.preventDefault();

    const accept = confirm(`Действительно хотите удалить ${type} ?`);

    if (accept) {
      if (type === "расход") {
        dispatch(deleteExpense(id));
      } else if (type === "доход") {
        dispatch(incomeDeleteItem(id));
      }
      toast.success("Успешно удалено!", {
        autoClose: 3000
      });
    }
  };

  return (
    <>
      <PopupEdit
        handleClose={handleClose}
        close={statusPopup}
        popupRef={popupRef}
        type={type}
        id={idEvent}
      />

      <table className="account-table table">
        <TableHead />
        <TableBody
          handleDelete={handleDelete}
          itemsCrop={itemsCrop}
          setIdEvent={setIdEvent}
          setType={setType}
        />
      </table>
    </>
  );
};

Table.propTypes = {
  itemsCrop: PropTypes.array
};

export default Table;
