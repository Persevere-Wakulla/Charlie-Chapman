import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-div'>
    <header>
  <nav  >

    <h1>Chap's On Fire</h1>
        <Link to="/"> Home </Link> 
        <Link to="/about">About</Link>
        <Link to="order">Order</Link>
  </nav>
    </header>
  </div>
  )
}

export default Navbar