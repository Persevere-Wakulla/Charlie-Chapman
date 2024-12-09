import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../../home/BackButton';


const DeleteReview = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteReview = async () => {
        try {
          setLoading(true)
          const req = await fetch(` http://localhost:5051/Review/${id}`, {
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
    <div> <BackButton/>
    <h1 className="delete">Delete Review</h1>
    {loading ? <Spinner/> : ''}
    <div className="delete-div">Delete Review ?</div>
    <button className="delete-btn" onClick={handleDeleteReview}>Yes, Delete It!!</button></div>
  )
}

export default DeleteReview