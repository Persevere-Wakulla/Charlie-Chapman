import React, { useState, useEffect } from "react"
import BackButton from "../home/BackButton.jsx";
import Spinner from "../home/spinner.jsx";
import { useNavigate, useParams } from 'react-router-dom'


const DeleteArtPiece = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
  
    const handleDeletePiece = async () => {
      try {
        setLoading(true)
        const req = await fetch(` http://localhost:5051/Piece/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: null
        })
        setLoading(false)
        navigate('/')
      } catch (error) {
        setLoading(false)
        console.log(error.message);
      }
    }

    
  return (
    <div className="delete-container">
      <div className="" id="delete-div">
        <BackButton/>
        {/* <h1 className="delete">Delete Piece</h1> */}
        {loading ? <Spinner/> : ''}
        <div className="delete-div2">Delete Piece?</div>
        <button className="delete-btn1" onClick={handleDeletePiece}><i className="bi bi-trash3-fill"></i>Yes, Delete It!!<i className="bi bi-trash3-fill"></i></button>
        </div>
        </div>
  )
}

export default DeleteArtPiece