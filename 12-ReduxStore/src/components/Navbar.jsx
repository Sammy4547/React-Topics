import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Navbar() {
  const items=useSelector((state)=>state.cart)


  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <span className='logo'>REDUX STORE</span>
    <div>
        <Link classname="navLink" to='/'>

        Home
        </Link>

        <Link  classname= "navLink" to="/cart">
        
        Cart
        </Link>

        <span className='cartCount'>
            Cart items: {items.length}
        </span>
    </div>
    </div>
  )
}

export default Navbar