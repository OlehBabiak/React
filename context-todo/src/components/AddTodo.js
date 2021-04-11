import React, {useState, useContext} from 'react';
import TodoContext from "./TodoContext";

const AddTodo = () =>{
    const {onTodoCreate} = useContext(TodoContext)
    const [todoValues, setTodoValues] = useState(
        {
            id: '',
            title: '',
            description: '',
            complited: false
        }
    )
    const onTodoChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value})
    const onCreate = () => {
        incCounter()
        onTodoCreate(todoValues)
        setTodoValues(
            {
                id: '',
                title: '',
                description: '',
                complited: false
            }
        )
    }
    const {incCounter} = useContext(TodoContext)
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