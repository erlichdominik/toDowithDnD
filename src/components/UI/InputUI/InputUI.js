import React from "react";
import styles from "./InputUI.module.css";

const inputTasks = props => {
  switch (props.inputType) {
    case "input":
      return (
        <input
          className={styles.input}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.changable}
        />
      );
    case "textarea":
      return (
        <textarea
          className={styles.textarea}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.changable}
          rows="8"
        />
      );
    default:
  }

  return (
    <div className={styles.InputTasksContainer}>
      <form> {inputTasks}</form>
    </div>
  );
};

export default inputTasks;
