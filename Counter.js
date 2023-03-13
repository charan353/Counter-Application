import React, { useState } from 'react'

const Counter = () => {

const[val,setval]=useState(0);
 const adding=()=>{
    setval(val+1)
 }
  const sub=()=>{
    setval(val-1)
    if( val<=0)
    {
        setval(0)
        alert('sorry!! u cnt go down');
    }
  }
  return (
    <div className='counter' >
        <div className='btn-1'>
        <button onClick={adding} className="btn">add</button>
        <span className="btn">{val}</span>
        <button onClick={sub} className="btn">minus</button>
        </div>
        
    </div>
    
    
    
  )
}

export default Counter