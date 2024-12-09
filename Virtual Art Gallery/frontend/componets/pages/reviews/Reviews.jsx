import React, { useState, useEffect } from 'react'
import ReviewCard from './ReviewCard.jsx'
import { Link } from "react-router-dom";


const Reviews = () => {
  // fetch your reviews in effect, save to state
  // map through them to call 1 card at a time

  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);


  const getReview = async () => {
    try {
      setLoading(true)
      const req = await fetch("http://localhost:5051/Review")
      const res = await req.json()
      if (res) setReview(res.data)
      console.log(res.data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  }
  useEffect(() => {
    getReview()
  }, [])

  useEffect(() => {

  })
  return (
    <div className='review-div'>
<div className="fancy"><h2 className='w3-animate-top'>Visitor</h2><h1 className='w3-animate-left'>Reviews </h1></div>
    
      <div className="flex justify-between items-center">
      
        <Link to="/reviews/create"><div className="bg-blue-300 rounded-md hover:bg-green-500 duration-500 transition-all p">&#128933; </div></Link>
      </div>
      <div className="">
      </div>
      {review.map((review)=>
        <ReviewCard review={review} />
      )}
    </div>
  )
}

export default Reviews