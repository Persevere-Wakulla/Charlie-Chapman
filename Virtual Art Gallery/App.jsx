// pages
import React from 'react'
import About from './frontend/componets/pages/About.jsx'
import Home from './frontend/componets/pages/Home.jsx'
import DeleteArtPiece from './frontend/componets/pages/DeleteArtPiece.jsx'
import Contact from './frontend/componets/pages/Contact.jsx'
import CreateArtPiece from './frontend/componets/pages/CreateArtPiece'
import EditPiece from './frontend/componets/pages/EditPiece'
// layout
import RootLayout from './frontend/layout/RootLayout.jsx'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Faq from './frontend/componets/pages/Faq.jsx'
import '/style.css'
import EditReview from './frontend/componets/pages/reviews/EditReview.jsx'
import DeleteReview from './frontend/componets/pages/reviews/DeleteReview.jsx'
import CreateReview from './frontend/componets/pages/reviews/CreateReview.jsx'
import Reviews from './frontend/componets/pages/reviews/Reviews.jsx'
import NotFound from './frontend/componets/pages/NotFound.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="piece/create" element={<CreateArtPiece/>}/>
      <Route path="piece/edit/:id" element={<EditPiece/>}/>
      <Route path="piece/delete/:id" element={<DeleteArtPiece/>}/>
      <Route path="about" element={<About />} >
        <Route path="reviews" element={<Reviews />} />
        <Route path="reviews/create" element={<CreateReview/>}/>
        <Route path="reviews/edit/:id" element={<EditReview/>}/>
        <Route path="reviews/delete/:id" element={<DeleteReview/>}/>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />

    </Route>
  )
)

const App = () => {
  return (

    < RouterProvider router={router} />
  )
}

export default App