import React, {useContext} from "react";
import TodoContext from "./TodoContext";

const DoneCounter = () =>{
    const {doneCounter} = useContext(TodoContext)
    return(
        <div><h3>Done Todos: {doneCounter}</h3></div>
    )
}

export default DoneCounter