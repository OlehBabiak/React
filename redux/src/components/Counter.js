import {useSelector, useDispatch} from 'react-redux'
//Сюди перекидуєм store(counter) з App.js
import {
    incAction,
    incCustom,
    incDec,
    incRes
} from '../redux/action-creators'
const Counter = () => {
    const counter = useSelector(({counter})=> counter)
    const dispatch = useDispatch()

    //В payload можем класти масив елементів які берем з сервера
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={()=> dispatch(incAction())}>INC</button>
            <button onClick={()=> dispatch(incCustom(102))}>INC CUSTOM</button>
            <button onClick={()=> dispatch(incDec())}>DEC</button>
            <button onClick={()=> dispatch(incRes())}>RESET</button>
        </>
    )
}

export default Counter