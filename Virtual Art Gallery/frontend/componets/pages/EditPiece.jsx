import React, { useState,useEffect } from 'react'
import BackButton from '../home/BackButton.jsx'
import Spinner from '../home/spinner.jsx'
import { useNavigate, useParams } from 'react-router-dom'


const EditPiece = () => {
  const [picOfPiece, setPicOfPiece] = useState('');
  const [pieceName, setPieceName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('')
  const [artistName,setArtistName] = useState('')
  const [year,setYearName] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams()


  const getPiece = async () => {
    try {
        setLoading(true)
        console.log('here');
        const req = await fetch(`http://localhost:5051/Piece/${id}`)
        const res = await req.json()
        if (res) {

          setPicOfPiece(res.data.picOfPiece);
          setPieceName(res.data.pieceName)
            setDescription(res.data.description)
            setArtistName(res.data.artistName)
            setCategory(res.data.category)
            setYearName(res.data.year)
        }

        setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log(error.message);

    }
}
useEffect(() => {
    getPiece()
}, [])

const handleEditPiece = async () => {
    try {
        setLoading(true)
        await fetch(`http://localhost:5051/piece/${id}`, {
            method: "PUT",
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              picOfPiece,
                description,
                pieceName,
                category,
                artistName,
                year
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
    <div className='edit-container'>   
        <h1 className="edit-h1">Edit Piece</h1>
    {loading ? <Spinner /> : ''}
    <div className="edit-div">
        <div className="edit">
            <label className="edit-label">Picture</label>
            <input
                type="text"
                value={picOfPiece}
                className="edit-input"
                onChange={(e) => setPicOfPiece(e.target.value)}
            />
        </div>
        <div className="edit">
            <label className="edit-label">Name</label>
            <input
                type="text"
                value={pieceName}
                className="edit-input"
                onChange={(e) => setPieceName(e.target.value)}
            />
        </div>
        <div className="edit">
            <label className="edit-label">Description</label>
            <input
                type="text"
                value={description}
                className="edit-input"
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className="edit">
            <label className="edit-label">Artist Name</label>
            <input
                type="text"
                value={artistName}
                className="edit-input"
                onChange={(e) => setArtistName(e.target.value)}
            />
        </div>
        <div className="edit">
            <label className="edit-label">Category</label>
            <input
                type="text"
                value={category}
                className="edit-input"
                onChange={(e) => setCategory(e.target.value)}
            />
        </div>
    <div className="edit">
        <label className="edit-label">Year</label>
        <input
            type="text"
            value={year}
            className="edit-input"
            onChange={(e) => setYearName(e.target.value)}
            />
    </div>
        <button className="edit-btn" onClick={() => handleEditPiece()}>Save</button>
            </div>
    </div>
  )
  
}

export default EditPiece