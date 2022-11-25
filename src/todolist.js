import React from "react";
import ToDo from "./todo";
export default function ToDoList(props) {
    console.log("todolist", props);
    return (
        <div>
            <h3>Todo list name:</h3>
            {props.item.map((e, index) => (
                <div key={index}>
                    <ToDo todo={e} />
                </div>
            ))}
        </div>
    );
}
