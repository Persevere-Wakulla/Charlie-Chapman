import React, { useState, useEffect } from "react"
import BackButton from "../home/BackButton.jsx"
import Spinner from "../home/Spinner.jsx"
import { useNavigate, useParams } from 'react-router-dom'


const DeleteMenuItem = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
  
    const handleDeleteMenuItem = async () => {
      try {
        setLoading(true)
        const req = await fetch(` http://localhost:5050/Menu/${id}`, {
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
        <BackButton/>
        <div className="delete-card">
        <h1 className="delete">Delete Item</h1>
        {loading ? <Spinner/> : ''}
        <div className="delete-div">Delete Item ?</div>
        <button className="delete-btn1" onClick={handleDeleteMenuItem}><i className="bi bi-trash"></i>Yes, Delete It!!<i className="bi bi-trash"></i></button>
        </div></div>
  )
}

export default DeleteMenuItem