import React, {createContext} from 'react'
// import CounterContext from "./CounterContext";

const CounterContext = createContext()

export default function ContextProvider({children}) {
    const [counter, setCounter] = React.useState(0)
    console.log(children)
    const incCounter = () => {
        setCounter(counter +1)
    }

    const decCounter = () => {
        setCounter(counter -1)
    }

    return (
            <CounterContext.Provider value = {{
                counter,
                incCounter,
                decCounter
            }}>
                
                {children}
            </CounterContext.Provider>
    )
}
