import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import TodoCounter from "./TodoCounter";
import TodoContext from "./TodoContext";


const Header = () =>{
    return (
        <header>
            <Link to='/'>List</Link>
            <Link to='/create-todo'>Add new todo</Link>
            <TodoCounter/>
        </header>
    )
}



export default Header;