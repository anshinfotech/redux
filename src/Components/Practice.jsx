import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Action/countAction'

const Practice = () => {
  const data = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()
  console.log(data);

  const add=()=>{
    dispatch(increment(1))
  }
  const sub=()=>{
    dispatch(decrement(1))
  }
  return (
    <>
    <h1>{data}</h1>
    <button onClick={add}>Add</button>
    <button onClick={sub}>Minus</button>
    </>
  )
}

export default Practice