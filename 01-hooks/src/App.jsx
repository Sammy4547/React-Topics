import { useState } from 'react'
import './App.css'

function App() {


  let [counter,setCounter]=useState(0)

  const addvalue=()=>{
    if(counter===20){
      setCounter(counter)
    }
    else{
    setCounter(counter+1)
    } 
  }
  const removevalue=()=>{
    if (counter===0) {
      
      setCounter(counter)
    }
    else{
      setCounter(counter-1)

    }
  }
  return (
    <div>
      <h1>Hello India</h1>
      <h2>Counter Value :{counter}</h2>

      <button onClick={addvalue}>Add Value:{counter}</button>

      <br />

      <button onClick={removevalue}>Remove Value:{counter}</button>
    </div>
  )
}

export default App
