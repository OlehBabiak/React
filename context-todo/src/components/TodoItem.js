import React, {useContext} from "react";
import TodoContext from "./TodoContext";


const TodoItem = ({todo, index, removeTodo, isDoneToggle, doneTodoCounter}) => {
    const classes = []
    if(todo.complited){
        classes.push('done')
    }
    console.log(classes)
const onTodoDelete = () => {
    const answer = window.confirm('Are you sure?')
    if(answer){
        removeTodo(todo.id)
    }
}
   const onMarkIsDoneToggle = () =>{
isDoneToggle(todo.id);
doneTodoCounter(todo.id)
   }
    return (
        <div className='todoItem'>
            <div className={classes.join(' ')}>
            <h4>{index}. {todo.title}</h4>
            <p>{todo.description}</p>
            </div>
            <button onClick={onMarkIsDoneToggle}>Mark is done</button>
            <button onClick={onTodoDelete}>Delete</button>
        </div>
    )
}

export default TodoItem