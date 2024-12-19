import React from 'react'
import { useState } from 'react'

function Count() {

    
    let [count,setCount]= useState(0)
    function handleDecrease() {  
        setCount(++count);      
    }

    function handleIncrease() {
        if (count>=0) {
            setCount(count--)
        }     
    }
    function handleReset() {
        setCount(count=0)
    }

  return (
    <>
    <button onClick={handleIncrease}>-</button>
    <span>{count}</span>
    <button onClick={handleDecrease}>+</button>
    <button onClick={handleReset}>reset</button>
    </>
  )
}

export default Count