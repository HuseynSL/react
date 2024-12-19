import React from 'react'
import { useState } from 'react'



function Input() {

    let [input,setInput]=useState()
    let [fontSize,setFontSize]=useState(16)



    function decrease() {
        if (fontSize>20) {
            setFontSize(fontSize-2);
        }
        
    }
    function increase() {
        setFontSize(fontSize+2);
    }

  return (
    <div>
        <form>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
            <p>{input}</p>
        </form>


        <p style={{ fontSize: `${fontSize}px` }}>
            Lorem, ipsum dolor.</p>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>

    </div>
  )
}

export default Input