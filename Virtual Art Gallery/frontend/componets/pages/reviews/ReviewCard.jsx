import React from 'react'
import { Link } from 'react-router-dom'
import Reviews from './Reviews.jsx'


const ReviewCard = ({ review }) => {
  console.log(review)
  return (
    <article className="review-card">
      <div className="card">
        <img src={review.img} alt="avatar" id='review-img' className='w3-circle' />
        <h3 className="title green">{review.userName}</h3>
        <p className="review-text">&#10075; {review.review} &#10076;</p>
        <div className="" id='date'>
          <span className="green " id='dc' >Date: {review.date}</span></div>
        <div className="">
          <Link to={`reviews/edit/${review._id}`} >
            <div className="edit-btn">✏️</div>
          </Link>
          <Link to={`reviews/delete/${review._id}`}>
            <div className="delete-btn">🗑️</div>
          </Link>
        </div>
      </div>
    </article>
  )
}
// frontend\public\reviews\image-anne.jpg
export default ReviewCard