import React, { useState, useEffect } from 'react'
import BackButton from '../home/BackButton.jsx'
import Spinner from '../home/spinner.jsx'
import { useNavigate } from 'react-router-dom'

const CreateArtPiece = () => {
    const [picOfPiece, setPicOfPiece] = useState('');
    const [pieceName, setPieceName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('')
    const [artistName,setArtistName] = useState('')
    const [year, setYear] = useState('')
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const createPiece = async () => {
        try {
            setLoading(true)
            await fetch('http://localhost:5051/piece', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    picOfPiece,
                    pieceName,
                    description,
                    artistName,
                    category,
                    year,
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
    <div className='create-container'>  
        <BackButton/>
         <h1 className="create-h1"> <span className="cp">Create Piece</span> </h1>
    {loading ? <Spinner /> : ''}
    <div className="create-div">
        <div className="create">
            <label className="create-label">Picture</label>
            <input
                type="text"
                value={picOfPiece}
                className="create-input"
                onChange={(e) => setPicOfPiece(e.target.value)}
            />
        </div>
        <div className="create">
            <label className="create-label">Name</label>
            <input
                type="text"
                value={pieceName}
                className="create-input"
                onChange={(e) => setPieceName(e.target.value)}
            />
        </div>
        <div className="create">
            <label className="create-label">Description</label>
            <input
                type="text"
                value={description}
                className="create-input"
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className="create">
            <label className="create-label">Artist Name</label>
            <input
                type="text"
                value={artistName}
                className="create-input"
                onChange={(e) => setArtistName(e.target.value)}
            />
        </div>
        <div className="create">
            <label className="create-label">Category</label>
            <input
                type="text"
                value={category}
                className="create-input"
                onChange={(e) => setCategory(e.target.value)}
            />
        </div>
        <div className="create">
            <label className="create-label">Year</label>
            <input
                type="text"
                value={year}
                className="create-input"
                onChange={(e) => setYear(e.target.value)}
            />
        </div>
       
    </div>
   
        <button className="create-btn" onClick={() => createPiece()}>Save</button>
    </div>
  )
}

export default CreateArtPiece