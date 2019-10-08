import React from "react";
import styles from "./ShowTasks.module.css";
import Task from "./Task/Task";
import { connect } from "react-redux";

const showTasks = props => {
  const tasks =
    props.ToDoList !== undefined
      ? props.ToDoList.map(el => (
          <Task key={el.id} title={el.title} description={el.description} />
        ))
      : null;

  return <div className={styles.showTasksContainer}>{tasks}</div>;
};

const mapStateToProps = state => {
  return {
    ToDoList: state.mn.toDoList
  };
};

export default connect(
  mapStateToProps,
  null
)(showTasks);
