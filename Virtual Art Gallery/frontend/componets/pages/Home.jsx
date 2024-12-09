import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import Spinner from '../home/spinner.jsx'
import ArtPieceTable from '../home/artPieceTable.jsx'
import SignIn from '../home/SignIn.jsx'
import Footer from './Footer.jsx'
import Image from './Image.jsx'
import { ThemeContext } from '../../layout/RootLayout.jsx'

const Home = () => {
  const [piece, setPiece] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null)
  const theme = useContext(ThemeContext)

  useEffect(() => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark-mode')
    } else {
        document.documentElement.classList.remove('dark-mode')
    }
}, [theme])

  const getPiece = async () => {
    try {
      setLoading(true)
      const req = await fetch("http://localhost:5051/piece")
      const res = await req.json()
      if (res) setPiece(res.data)
      console.log(res.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  }
  useEffect(() => {
    getPiece()
  }, [])

  useEffect(() => {

  })
  return (
    <div>
      {/* <LightDarkBtn/> */}
        <ArtPieceTable piece={piece}  AdminLogin={loggedIn}  className/>
        <div className="">
        <SignIn log={setLoggedIn} />
        {loggedIn &&
          <Link to="/piece/create" className="admin"><div >&#128933; Add Piece</div></Link>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Home