import React, { useState, useEffect } from "react"
import BackButton from "../componets/home/BackButton"
import Spinner from "../componets/Spinner"
import { useNavigate, useParams } from 'react-router-dom'


const DeleteComments = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteComments = async () => {
    try {
      setLoading(true)
      const req = await fetch(` http://localhost:5555/comments/${id}`, {
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
    <div className="p-4 dc">
      <BackButton/>
      <h1 className="text-3x; my-4 h b">Delete Book</h1>
      {loading ? <Spinner/>:''}
      <div className="flex flex-col items-center border-2 border-red-400 rounded-xl w-[600px] p-8 mx-auto db">
        <h3 className="text-2xl h dt">Are You Sure want to delete this book ?</h3>

      <button className="p-4 bg-red-600 text-white m-8 w-full h hd"
      onClick={handleDeleteComments}>Yes,Delete it</button>
      </div>
    </div>
  )
}

export default DeleteComments