import React, {useEffect}  from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    addToWishList,
    addToCard
} from '../redux/action-creators'

const Buttons = (isButtonOnclick, id) => {

//style={{background: isButtonOnclick && 'darkred'}}
    const dispatch = useDispatch()
    return(
        <div className='productButtons'>
            <button  onClick={()=>dispatch(addToWishList())}>Add to wishList</button>
            <button  onClick={()=>dispatch(addToCard())}>Add to Cart</button>
        </div>
    )
}
export default Buttons