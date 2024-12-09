import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='nav-div'>
    <header>
  <nav  >

    {/* <h1 id='nav-h1'>Show Time</h1> */}
        <Link to="/"> Home </Link> 
        <Link to="/about">About</Link>
  </nav>
    </header>
  </div>
  )
}

export default Navbar