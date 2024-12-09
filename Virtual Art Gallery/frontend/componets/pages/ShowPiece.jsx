import React, { useState } from 'react'
import { useParams } from 'react-router'
import BackButton from '../home/BackButton.jsx'
import Spinner from '../home/spinner.jsx'

const ShowPiece = () => {
const [piece, setPiece] = useState({});
const {id} = useParams();

let loading
useEffect(() => {
    const getPiece = async () => {
      loading = true
      try {
        const req = await fetch('http://localhost:5051/Pieces/')
        const res = await req.json()
        if (res) setPiece(res.data.find(piece=> piece._id === id))
        loading = false
      } catch (error) {
        loading = false
        console.log(error.message);
      }
    }
      getPiece()
    }, [])

  return (
    <section className="Showpiece">
        <BackButton/>
    <div>
        <h1 className="show-h1">Piece Shown</h1>
        {loading ? (
            <Spinner/>
             ):(
                <div className="pieceItem">
                    <div className="show-div">
                        <span className="show-span">Piece Name:</span>
                        <span className="piece-item">{piece.pieceName}</span>
                    </div>
                    <div className="show-div">
                        <span className="show-span">Description:</span>
                        <span className="piece-item">{piece.description}</span>
                    </div>
                    <div className="show-div">
                        <span className="show-span">Artist:</span>
                        <span className="piece-item">{piece.artistName}</span>
                    </div>
                    <div className="show-div">
                        <span className="show-span">Year:</span>
                        <span className="piece-item">{piece.year}</span>
                    </div>
                    <div className="show-div">
                        <span className="show-span">Category:</span>
                        <span className="piece-item">{piece.category}</span>
                    </div>
                  
                   
                    <div className="show-img">
                        <span className="piece-img">{piece.picOfPiece}</span>
                    </div>
                </div>
                
             )
       }
    </div>
    </section>
  )
}

export default ShowPiece