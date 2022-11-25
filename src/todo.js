import React from "react";
import { connect } from "react-redux";
import { toggle } from "./action";
function ToDo(props) {
    console.log("todo", props);

    return (
        <div onClick={props.toggle} className={props.todo.completed ? "cross" : ""}>
            {props.todo.name}
        </div>
    );
}
const mstp = state => {
    return {
        state: state.item
    };
};
export default connect(
    mstp,
    { toggle }
)(ToDo);
