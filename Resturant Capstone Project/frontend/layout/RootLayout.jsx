import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {


  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>Some text</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="submitOrder">Submit Order</NavLink>


        </nav>
      </header>
      <main><Outlet /></main>
    </div>
  )
}

export default RootLayout