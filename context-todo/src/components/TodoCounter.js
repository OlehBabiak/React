import React, {useContext} from "react";
import TodoContext from "./TodoContext";

const TodoCounter = () =>{
    const {counter} = useContext(TodoContext)
    return(
        <div><h3>Total todos: {counter}</h3></div>
    )
}

export default TodoCounter