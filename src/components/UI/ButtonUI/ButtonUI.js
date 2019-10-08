import React from "react";
import styles from "./ButtonUI.module.css";

const buttonUI = props => {
  return (
    <button
      className={styles.button}
      type={props.type}
      onClick={props.clicked}
      name={props.name}
    >
      {props.children}
    </button>
  );
};

export default buttonUI;
