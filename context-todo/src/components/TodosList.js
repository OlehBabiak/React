import React, {useContext} from 'react';
import TodoItem from "./TodoItem";
import TodoContext from "./TodoContext";

const TodosList = () =>{
    const {todos} = useContext(TodoContext)
    return (
        <div>
            <h1>Todos list</h1>
            {todos.map((todo, index) => <TodoItem key={todo.title + todo.description} todo={todo} index={index+1}/>)}
        </div>
    )
}

export default TodosList;