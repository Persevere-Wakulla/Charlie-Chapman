import React from 'react'
import {Link} from 'react-router-dom'

const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'><Link to={destination}><div className="bg-red-100 rounded-md hover:bg-green-500 duration-400 transition-all  bb">👈🏽</div></Link></div>
  )
}

export default BackButton