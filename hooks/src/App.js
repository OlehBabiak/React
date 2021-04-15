import React, {useState,useEffect} from 'react'
import './App.css';

function App() {
    const [counter, setCounter] = useState(0)
    const inc = () => {
        setCounter(prev=>prev+1)
    }
    const dec = () => {
        setCounter(prev=>prev-1)
    }
    const res = () => setCounter(0)
  return (
    <div className="App">
        <h2>{counter}</h2>
        <button onClick={inc}>Inc</button>
        <button onClick={res}>Res</button>
        <button onClick={dec}>Dec</button>
    </div>
  );
}

export default App;
