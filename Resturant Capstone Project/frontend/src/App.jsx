import React from 'react'
import Home from './componets/pages/Home'
import About from './componets/pages/About'
import SubmitOrder from './componets/pages/SubmitOrder'
import CreateMenuItem from './componets/pages/CreateMenuItem'
import ShowMenu from './componets/pages/ShowMenu'
import EditMenu from './componets/pages/EditMenu'
import DeleteMenuItem from './componets/pages/DeleteMenuItem'
import { BrowserRouter, Routes, Route, Link,NavLink } from 'react-router-dom'
import Tittle from './componets/pages/Tittle'

// importabout
// import {
//   Route,
//   createBrowserRouter,
//   RouterProvider,
//   createRoutesFromElements
// } from 'react-router-dom'
// layouts
// import RootLayout from '../layout/RootLayout'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={RootLayout}>
//     <Route index element={<Home />} />
//     <Route path='about' element={<About/>}/>
//     <Route path='/menu/create' element={<CreateMenuItem />} />
//     <Route path='/menu/edit/:id' element={<EditMenu />} />
//     <Route path='/menu/delete/:id' element={<DeleteMenuItem />} />
//   </Route>
//   )
// ) 

const App = () => {
  return (
    <BrowserRouter>
    <header>
      <nav>
        {/* <h1>Chap's On The Fire</h1> */}
        <Tittle/>
        <Link to="/">Home</Link>
        <NavLink to="about">About</NavLink>
        <NavLink to="submitOrder">Submit Order</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="submitOrder" element={<SubmitOrder />} />
          <Route path='/menu/create' element={<CreateMenuItem />} />
          <Route path='/menu/edit/:id' element={<EditMenu />} />
          <Route path='/menu/delete/:id' element={<DeleteMenuItem />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App