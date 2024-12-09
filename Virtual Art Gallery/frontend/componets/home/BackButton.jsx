import React from 'react'
import {Link} from 'react-router-dom'


const BackButton = ({destination = '/'}) => {
  return (
    <div>
       <div className=''>
        <Link to={destination}>
        <div className="backbtn">👈🏽</div>
        </Link></div>
        </div>
  )
}

export default BackButton