import React,{ useState } from 'react'

const ClassMate = () => {
   const[counter,setCounter] =useState(0)
   
    return (
        <div>
         <p>Function State:{counter}</p>  
         <button onClick={()=>setCounter(prevCounter=>prevCounter +1)}>add</button> 
        </div>
    )
}

export default ClassMate
