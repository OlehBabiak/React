import React, {useState} from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({children}) =>{
    let [todos, setTodos] = useState([])
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.title !=id))
    }
    const todoDone = (id) => {
        setTodos(todos.map(el => {
                if (el.id === id) {
                    el.complited = !el.complited
                }
            }
        ))
    }
    const onTodoCreate = (newTodo) =>{
if(!newTodo || !newTodo.title || !newTodo.description) {
    console.error('wrng arg for new todo, should be smth like {title: "...", description: "..."}')
    return
}
setTodos([newTodo,...todos])
    }

    const [counter, setCounter] = React.useState(0)
    const incCounter = () => {
        setCounter(todos.length)
        console.log(todos)
    }
    return(
        <TodoContext.Provider value={{
        todos,
            counter,
            onTodoCreate,
            removeTodo,
            todoDone,
            incCounter
        }
        }>
        {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider