import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuModal from './MenuModal'

const MenuTable = ({ menu, manager }) => {
  
  const [qty, setQty] = useState({item: '', qty: 0})

  return (
    <div className='home-div '>

      <div className="flexCard  ">
        {menu.map((m, index) =>
        (<div key={index} className="card w3-hover-shadow  " width='50%'>
          <div  className='title'>
          <span className="index" id='table-span'>{index + 1}.</span>
          <h4 className='dishName' id='dish-table'>{m.dishName}</h4>
          </div>
          <div className='card-info' >
          <img src={m.imageUrl} alt="food pic " className='food-pic ' id='img' />
          <div>
          <p className="descript w3-opacityt ">{m.description}</p>
          <p className="price-elem w3-center"><span>Price: $</span>{m.price}</p>
          <p className="availability">Available: {m.availability}</p>
          </div>
          <div className="controls">
            {
              manager &&
              <div className='control div'>
                <Link to={`menu/edit/${m._id}`}>
                  <div className="edit-btn">✏️</div>
                </Link>
                <Link to={`menu/delete/${m._id}`}>
                  <div className="delete-btn">🗑️</div>
                </Link>
              </div>
            }</div>
          </div>
        </div>
        )
        )}
      </div>
   
    </div>

  )
}

export default MenuTable