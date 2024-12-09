import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../../home/BackButton'


const EditReview = () => {
  const [img, setImg] = useState('');
  const [userName, setUserName] = useState('');
  const [review, setReview] = useState('');
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams()

  const getReview = async () => {
    try {
        setLoading(true)
        console.log('here');
        const req = await fetch(`http://localhost:5051/Review/${id}`)
        const res = await req.json()
        if (res) {

          setImg(res.data.img);
          setUserName(res.data.userName)
            setReview(res.data.review)
            setDate(res.data.date)
        }

        setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log(error.message);

    }
}
useEffect(() => {
    getReview()
}, [])

const handleEditReview= async () => {
  try {
      setLoading(true)
      await fetch(`http://localhost:5051/Review/${id}`, {
          method: "PUT",
          mode: 'cors',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            img,
            userName,
              pieceName,
              review,
              date
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
    eturn (
      <div>   <h1 className="edit-h1">Edit Review</h1>
      {loading ? <Spinner /> : ''}
      <div className="edit-div">
          <div className="edit">
              <label className="edit-label">Img</label>
              <input
                  type="text"
                  value={img}
                  className=""
                  onChange={(e) => setImg(e.target.value)}
              />
          </div>
          <div className="edit">
              <label className="edit-label">User Name:</label>
              <input
                  type="text"
                  value={userName}
                  className=""
                  onChange={(e) => setUserName(e.target.value)}
              />
          </div>
          <div className="edit">
              <label className="edit-label">Review</label>
              <input
                  type="text"
                  value={review}
                  className=""
                  onChange={(e) => setReview(e.target.value)}
              />
          </div>
          <div className="edit">
              <label className="edit-label">Date</label>
              <input
                  type="text"
                  value={date}
                  className=""
                  onChange={(e) => setDate(e.target.value)}
              />
          </div>
          
          <button className="edit-btn" onClick={() => handleEditReview()}>Save</button>
      </div>
      </div>
    )
  )
}

export default EditReview