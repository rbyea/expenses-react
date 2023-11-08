import React from "react";
import styles from "./preloader.module.css";
import "./preloader.default.css";

const Preloader = (props) => {
  return (
    <div className={styles.preloader}>
      <svg
        className="spinner"
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  );
};

export default Preloader;
