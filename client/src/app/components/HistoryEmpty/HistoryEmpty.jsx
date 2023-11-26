import React from "react";
import { useDispatch } from "react-redux";
import { openPopup } from "../../store/popupSlice";

const HistoryEmpty = (props) => {
  const dispatch = useDispatch();
  const handlePopup = (e) => {
    e.preventDefault();
    dispatch(openPopup());
  };
  return (
    <div className="historyContainer">
      <h2>
        История пуста <span>😕</span>
      </h2>
      <p className="centerBasket">
        Вероятней всего, вы не добавили транзакции в базу. <br />
        Для того, чтобы просмотреть историю, перейди в раздел добавления
        транзации.
      </p>
      <button onClick={(e) => handlePopup(e)} className="btn custom-btn">
        Добавить транзакцию
      </button>
    </div>
  );
};

export default HistoryEmpty;
