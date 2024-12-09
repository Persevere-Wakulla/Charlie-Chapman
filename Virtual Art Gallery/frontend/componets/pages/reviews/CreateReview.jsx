import React, { useState, useEffect } from 'react'
import BackButton from '../../home/BackButton.jsx'
import Spinner from '../../home/spinner.jsx'

import { useNavigate } from 'react-router-dom'

const CreateReview = () => {
    const [img, setImg] = useState('');
    const [userName, setUserName] = useState('');
    const [review, setReview] = useState('');
    const [date, setDate] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const { id } = useParams()

    const createReview = async () => {
        try {
            setLoading(true)
            await fetch('http://localhost:5051/Review', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    img: img,
                    userName: userName,
                    review: review,
                    date: date,
                })
            })
            setLoading(false)
            navigate('/')
        } catch (error) {
            setLoading(false)
            console.log(error.message);
        }
    }
  return (
    <div> <h1 className="create-h1">Create Review</h1>
    {loading ? <Spinner /> : ''}
    <div className="create-div">
        <div className="create">
            <label className="create-label">Profile Pic</label>
            <input
                type="text"
                value={img}
                className=""
                onChange={(e) => setImg(e.target.value)}
            />
        </div>
        <div className="create">
            <label className="create-label">user Name</label>
            <input
                type="text"
                value={userName}
                className=""
                onChange={(e) => setUserName(e.target.value)}
            />
        </div>
        <div className="create">
            <label className="edit-label">Review</label>
            <input
                type="text"
                value={review}
                className=""
                onChange={(e) => setReview(e.target.value)}
            />
        </div>
        <div className="create">
            <label className="create-label">Date</label>
            <input
                type="text"
                value={Date}
                className=""
                onChange={(e) => setDate(e.target.value)}
            />
        </div>
        <button className="create-btn" onClick={() => createReview()}>Save</button>
    </div>
 
    </div>
  )
}

export default CreateReview