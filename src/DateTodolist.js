import React from "react";
import Dates from "./Date";
import Todolist from "./Todolist";

const DateTodolist = (props) => (
    <div>
        <div className = "date">
            <Dates 
                data = {props.data}
            />
        </div>
        <div className = "list">
            <Todolist 
                data = {props.data}
                TodolistAdd = {props.TodolistAdd}
            />
        </div>
    </div>
);


export default DateTodolist;