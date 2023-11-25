import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/categoriesSlice";
import { openPopupEdit } from "../../store/popupSlice";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
const TableBody = ({ itemsCrop, setIdEvent, setType, handleDelete }) => {
  const dispatch = useDispatch();
  const categoriesList = useSelector(getCategories());

  const handleButton = (e, id, type) => {
    e.preventDefault();

    setIdEvent(id);
    setType(type);
    dispatch(openPopupEdit());
  };

  return (
    <>
      <tbody>
        {itemsCrop &&
          itemsCrop.map((el) => (
            <tr key={el._id || el.updatedAt}>
              <td scope="row">{new Date(el.updatedAt).toLocaleDateString()}</td>
              <td scope="row">
                {new Date(el.updatedAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </td>
              <td scope="row">{el.description}</td>
              <td scope="row">{el.type}</td>
              <td scope="row">
                {
                  categoriesList?.find(
                    (category) => category._id === el.category
                  )?.label
                }
              </td>
              <td
                className={
                  el.type === "расход" ? "text-danger" : "text-success"
                }
                scope="row"
              >
                <span className="me-1">{el.type === "расход" ? "-" : "+"}</span>
                {el.number}
              </td>
              <td scope="row">
                <div className="table-row-center">
                  <a
                    className="btn custom-btn"
                    onClick={(e) => handleButton(e, el._id, el.type)}
                    href="#"
                  >
                    Редактировать
                  </a>
                  <button
                    onClick={(e) => handleDelete(e, el._id, el.type)}
                    className="close-item"
                  >
                    <FaTimes />
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </>
  );
};

TableBody.propTypes = {
  setIdEvent: PropTypes.func,
  setType: PropTypes.func,
  itemsCrop: PropTypes.array,
  handleDelete: PropTypes.func
};

export default TableBody;
