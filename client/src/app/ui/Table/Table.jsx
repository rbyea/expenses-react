import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = (props) => {
  return (
    <table className="account-table table">
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
