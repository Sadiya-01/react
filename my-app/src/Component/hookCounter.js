import React,{useState}from 'react'
import Counter from '../App'
import Vote from ''
function HookCounter(){
    const Count = 0
    const [count,setCount] =  useState(Count)
    return(
        <div>
            count:{count}
               <button onClick ={()=>setCount(Count)}>reset {count}</button>
               <button onClick ={()=>setCount(count+1)}>increment{count}</button>
            <button onClick ={()=>setCount(count-1)}>decrement {count}</button>
        </div>
    )
}

export default HookCounter;