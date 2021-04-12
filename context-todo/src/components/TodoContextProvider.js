import React, {useState} from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({children}) =>{
    let [todos, setTodos] = useState([])
    const [counter, setCounter] = useState(0)
    const [doneTodos, setDoneTodos] = useState([])

    const todoCounter = () => {
        setCounter(todos.length)
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !=id))
    }
    const doneTodoCounter = (todoId) => {
        const isTodoMarkedAsDone = doneTodos.includes(todoId)
        if(isTodoMarkedAsDone){
        return setDoneTodos(doneTodos.filter(id => id !==todoId))
        }
        setDoneTodos([...doneTodos, todoId])
    }

    const isDoneToggle = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.complited = !todo.complited
            }
            return todo
        }))
    }



    const onTodoCreate = (newTodo) =>{
if(!newTodo || !newTodo.title || !newTodo.description) {
    console.error('wrng arg for new todo, should be smth like {title: "...", description: "..."}')
    return
}
setTodos([newTodo,...todos])
    }

    return(
        <TodoContext.Provider value={{
        todos,
            counter,
            doneTodos,
            onTodoCreate,
            removeTodo,
            isDoneToggle,
            todoCounter,
            doneTodoCounter
        }
        }>
        {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider