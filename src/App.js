import React from "react";
import "./App.css";
import ToDoList from "./containers/ToDoList/ToDoList";
import ShowTasks from "./containers/ShowTasks/ShowTasks";

function App() {
  return (
    <div className="App">
      <ToDoList />
      <ShowTasks />
    </div>
  );
}

export default App;
