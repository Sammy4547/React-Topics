// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {


  return (
    <>
      <h1 className='bg-green-500 text-black p-3 rounded-xl mb-4'>Hello India</h1>
      <Card username="Sammy" btnText="Visit Me"/>
      <Card username="Raju"  btnText="Click Me"/>
      <Card username="Harsh"  btnText="Ask Me"/>
   
    </>
  )
}

export default App
