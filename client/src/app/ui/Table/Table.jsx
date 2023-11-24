import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import PopupEdit from "../Popup/popupEdit";
import { closePopupEdit, getStatusPopupEdit } from "../../store/popupSlice";
import { useDispatch, useSelector } from "react-redux";

const Table = (props) => {
  const dispatch = useDispatch();
  const popupRef = React.useRef();
  const statusPopup = useSelector(getStatusPopupEdit());
  const [type, setType] = React.useState("");
  const [idEvent, setIdEvent] = React.useState();

  const handleClose = (e) => {
    const { target } = e;

    if (target.className.includes("popupWallet_popupDefault__g6tLy")) {
      dispatch(closePopupEdit());
    } else if (target.className.includes("popupWallet_popupClose__zrmvO")) {
      dispatch(closePopupEdit());
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
        <TableBody setIdEvent={setIdEvent} setType={setType} />
      </table>
    </>
  );
};

export default Table;
