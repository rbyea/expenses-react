import React from "react";
import { nanoid } from "nanoid";

const TableHead = (props) => {
  const tableHead = [
    {
      _id: nanoid(),
      name: "Дата"
    },
    {
      _id: nanoid(),
      name: "Время"
    },
    {
      _id: nanoid(),
      name: "Описание"
    },
    {
      _id: nanoid(),
      name: "Тип платежа"
    },
    {
      _id: nanoid(),
      name: "Категория"
    },
    {
      _id: nanoid(),
      name: "Сумма"
    },
    {
      _id: nanoid(),
      name: ""
    }
  ];

  return (
    <thead>
      <tr>
        {tableHead.map((el) => (
          <th key={el._id} scope="col">
            {el.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
