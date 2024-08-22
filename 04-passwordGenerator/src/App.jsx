
import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
 const [length,setLength]=useState(8)
const[numbAllow,setNumbAllow]=useState(false)
const [charAllow,setCharAllow]=useState(false)
const[password,setPassword]=useState("")

//useref hooks
const passwordref=useRef(null)

const passwordGenerator= useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numbAllow)  str+="0123456789"
  if(charAllow)  str+="!@#$%^&*_+=[]{}~"

  for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random()*str.length +1)
    
    pass+=str.charAt(char)
  }
  setPassword(pass)
  

},[length,numbAllow,charAllow,setPassword])

const coppyPasswordToClipboard=useCallback(()=>{
  passwordref.current?.select()
  passwordref.current?.setSelectionRange(0,99)
  window.navigator.clipboard.writeText(password)
},[password])


useEffect(()=>{
  passwordGenerator()
},[length,numbAllow,charAllow,passwordGenerator])
  return (
  
      <div className='w-full max-w-md mx-auto shdow-md rounded-lg py-5 px-8 my-8 text-orange-500 bg-gray-700'>  <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-2 px-3'
          placeholder='password'
          readOnly
          ref={passwordref} />
          <button onClick={coppyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

        </div>
        <div className='flex test-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6} 
              max={100}
              value={length}
               className='cursor-pointer'
               onChange={(e)=>{setLength(e.target.value)}}/>
               <label>length:{length}</label>
             
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
              defaultChecked={numbAllow}
              id='numberInput'
              onChange={()=>{
                setNumbAllow((prev)=>!prev)
              }}
               />
               <label>Numbers</label>
              
               <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
              defaultChecked={charAllow}
              id='numberInput'
              onChange={()=>{
                setCharAllow((prev)=>!prev)
              }}
               />
               <label>Charcters</label>
            </div>
            </div>
       
      </div>
      </div>

)

}
export default App;
