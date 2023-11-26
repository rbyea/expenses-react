import React from "react";
import styles from "./popupWallet.module.css";
import { FaTimes } from "react-icons/fa";
import SelectField from "../Form/selectField";
import PropTypes from "prop-types";
import Income from "./Income";
import Expenses from "./Expenses";

const PopupWallet = ({ popupRef, handleClose, close }) => {
  const typeList = [
    {
      value: "ddqwj123kldqhwklldqw",
      label: "Доход"
    },
    {
      value: "dqwdn123mb12kjdbqwkdjb",
      label: "Расход"
    }
  ];
  const [data, setData] = React.useState({
    type: ""
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  return (
    <>
      {close && (
        <div onClick={(e) => handleClose(e)} className={styles.popupDefault}>
          <div ref={popupRef} className={styles.popupContainer}>
            <a href="#" className={styles.popupClose}>
              <FaTimes />
            </a>

            <div className={styles.popupContent}>
              <h3 className={styles.center}>Добавить транзакцию</h3>
              <div className={styles.item}>
                <SelectField
                  label="Тип транзакции"
                  onChange={handleChange}
                  value={data.type}
                  options={typeList}
                  name="type"
                />
              </div>

              {data.type === typeList[0].value && <Income />}
              {data.type === typeList[1].value && <Expenses />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

PopupWallet.propTypes = {
  popupRef: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  close: PropTypes.bool.isRequired
};

export default PopupWallet;
