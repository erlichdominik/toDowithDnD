import React, { useState } from "react";
import InputTasks from "../../components/UI/InputUI/InputUI";
import Button from "../../components/UI/ButtonUI/ButtonUI";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

import "./ToDoList.css";

const ToDoList = props => {
  const [titleToDoList, setTitleToDoList] = useState("");
  const [descToDoList, setDescToDoList] = useState("");
  const handleOnButtonSubmit = () => {
    const newToDo = {
      id: new Date(),
      title: titleToDoList,
      description: descToDoList
    };
    props.onToDoListSubmit(newToDo);
    //console.log(newToDo);
    console.log(props.toDoList);
  };
  const handleTitleChange = event => {
    console.log(event.target.value);
    setTitleToDoList(event.target.value);
  };
  const handleDescChange = event => {
    console.log(event.target.value);
    setDescToDoList(event.target.value);
  };
  return (
    <div className="to-do-list">
      <InputTasks
        inputType="input"
        type="text"
        name="title"
        placeholder="Title"
        changable={event => handleTitleChange(event)}
      />
      <InputTasks
        inputType="textarea"
        name="description"
        placeholder="description"
        changable={event => handleDescChange(event)}
      />
      <Button type="button" clicked={handleOnButtonSubmit} name="submit-button">
        SUBMIT
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    toDoList: state.mn.toDoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToDoListSubmit: toDoList => dispatch(actions.addToDo(toDoList))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
