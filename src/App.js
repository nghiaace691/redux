import React from "react";
import "./styles.css";
import Form from "./form";
import ToDoList from "./todolist";
import { connect } from "react-redux";
function App(props) {
  console.log("APP", props);
  return (
      <div className="App">
        <h1>Hello Todo List</h1>
        <Form />
        <ToDoList item={props.item} />
      </div>
  );
}
const mstp = state => {
  return {
    item: state.item
  };
};
export default connect(
    mstp,
    {}
)(App);
