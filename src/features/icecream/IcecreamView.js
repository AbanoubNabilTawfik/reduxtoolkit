import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restocked } from './iceCreamSlice';

const IcecreamView = () => {
    const numOfIcecream= useSelector((state)=>state.icecream.numOfIcecreams);
    const dispatch= useDispatch();
  return (
    <div>
       <h2>Number of icecream -{numOfIcecream}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Icecream</button>
        <button onClick={()=>dispatch(restocked(5))}>Restock Icecream</button>
    </div>
  )
}

export default IcecreamView
