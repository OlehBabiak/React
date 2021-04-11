import React, {useContext} from "react";
import TodoContext from "./TodoContext";

const TodoCounter = () =>{
    const {counter} = useContext(TodoContext)
    return(
        <div><h3>Todo: {counter}</h3></div>
    )
}

export default TodoCounter