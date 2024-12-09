import React from 'react'
import artPieceTable from '../home/artPieceTable.jsx'


const ToolTip = ({piece}) => {

  
  return (
    <div className="tool">
    <h2 className="tooltip1" id='tip-h3'>{piece.pieceName} <i className="bi bi-info-square-fill"></i></h2>
    <span className='tooltiptext1'>
    <p className="tooltiptext1">{piece.description}</p>
    <p className="" id='artist-p' >Artist: {piece.artistName}</p>
    <p className="">Category: {piece.category}</p>
    <p>{piece.year}</p>
    </span>
    </div>
  )
}


export default ToolTip