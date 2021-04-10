import React, {useContext} from 'react'
import ContextProvider from "./ContextProvider";



export default function Header() {
   const {counter} = useContext(CounterContext)

    return (
       <h1>Header counter:{counter}</h1>
    )
}
