import React from "react";
import styles from "./Task.module.css";

const Task = props => {
  return (
    <div className={styles.task}>
      <p>TITLE: {props.title}</p>
      <p>DESC: {props.description}</p>
    </div>
  );
};

export default Task;
