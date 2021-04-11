import React, {useContext} from "react";
import TodoContext from "./TodoContext";


const TodoItem = ({todo, index}) => {
const {removeTodo, todoDone} = useContext(TodoContext)
//
    return (
        <div className='todoItem'>
            <h4>{index}. {todo.title}</h4>
            <p>{todo.description}</p>
            <button onClick={() => todoDone(todo.title)}>Mark is done</button>
            <button onClick={() => removeTodo(todo.title)}>Delete</button>
        </div>
    )
}

export default TodoItem