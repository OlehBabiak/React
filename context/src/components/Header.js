import React, {createContext, useContext} from 'react'
import ContextProvider from './ContextProvider'

const CounterContext = createContext()

export default function Header() {
   const countContext = useContext(CounterContext)

console.log(countContext);


    return (
       <h1>Header counter:</h1>
    )
}
