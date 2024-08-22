import { useState } from 'react'

import './App.css'

function App() {
  const [car, setCar] = useState({
    brand:"Ferrrari",
    model:"Rome",
    year:"2023",
    color:"red"

  })
  const updateColor=()=>{
    setCar((prev)=>{
      return{...prev,color:"blue"}

    })
  }

  return (
    <>
     <h1>My {car.brand}</h1>
     <h2>It is A {car.color} {car.model} in {car.year}</h2>
     <button onClick={updateColor}>blue</button>
    </>
  )
}

export default App
