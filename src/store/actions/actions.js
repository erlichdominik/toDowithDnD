import * as actionTypes from "./actionTypes";

export const addToDo = toDoList => {
  return {
    type: actionTypes.ADD_TO_DO,
    toDoList: toDoList
  };
};

export const removeToDo = toDoList => {
  return {
    type: actionTypes.REMOVE_TO_DO,
    toDoList: toDoList
  };
};
