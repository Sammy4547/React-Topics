import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import {Provider} from 'react-redux'
import store from './store/store'

function App() {

  return (
    <>
   <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
  </Provider>
    </>
  )
}

export default App
