import React from 'react'
import artPieceTable from '../home/artPieceTable.jsx'

const Image = ({piece}) => {
  return (
    <div>
      <img src={piece.picOfPiece} alt="Piece img" className='img'  />
      </div>
  )
}

export default Image