import React from "react";
import TodolistShow from "./TodolistShow";
const Todolist = (props) => (
    
    <div>
        <div onClick= {() => props.TodolistAdd("할일")}> 할일 </div>
        {props.data.contents.map(el => (
            <TodolistShow 
                data = {el}
            />
        ))}
    </div>
);

export default Todolist;