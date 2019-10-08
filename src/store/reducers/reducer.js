import * as actionTypes from "../actions/actionTypes";

const initalState = {
  toDoList: []
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_DO:
      let newArray = {
        id: action.toDoList.id,
        title: action.toDoList.title,
        description: action.toDoList.description
      };
      let xyz = state.toDoList.concat(newArray);

      return {
        ...state,
        toDoList: xyz
      };
    case actionTypes.REMOVE_TO_DO:
      const newToDo = state.toDoList.filter(el => el.id !== state.toDoList.id);
      return {
        ...state,
        toDoList: newToDo
      };
    default:
      return state;
  }
};

export default reducer;
