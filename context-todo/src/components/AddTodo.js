import React, {useState, useContext, useReducer} from 'react';
import TodoContext from "./TodoContext";
import { v4 as uuidv4 } from 'uuid'

const initialState = {
    id: null,
    title: '',
    description: '',
    complited: false
}
const reducer = (todoValues, action) => {
    switch (action.type) {
        case 'ON_CHANGE':
            return {
                id: todoValues.id,
                title: todoValues.title,
                description: todoValues.description,
                complited: !todoValues.complited
            };
        case 'ON_CREATE':
            return {
                target: todoValues.target
                ...todoValues, todoValues[name]: value
            }
    }
}
const AddTodo = () =>{
    const {onTodoCreate} = useContext(TodoContext)
    const [todoValues, dispatch] = useReducer(reducer, initialState)
    console.log(todoValues)
    const onTodoChange = ({target: {name, value}}) => dispatch({...todoValues, [name]: value})
    const onCreate = () => {
        onTodoCreate({...todoValues, id:uuidv4()})
        dispatch(
            {
                type: 'ON_CHANGE'
            }
        )
    }

    return (
        <div>
            <input value={todoValues.title} onChange={onTodoChange} type='text' name='title' placeholder='todo title' />
            <br/>
            <br/>
            <input value={todoValues.description} onChange={onTodoChange} type='text' name='description' placeholder='todo description' />
            <br/>
            <br/>
            <button onClick={onCreate}>add todo</button>

        </div>
    )
}

export default AddTodo