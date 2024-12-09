import React, {useState, useEffect} from 'react'

const LightDarkBtn = ({setter}) => {
const [toggle, setToggle] = useState(false)
useEffect(()=>{
  toggle === true ? setter('dark') : setter('light')
},[toggle])

  return (
<div>
    {/* <button onClick={()=> setToggle(!toggle)}>Change Theme</button> */}
    <label htmlFor="">LightMode</label>
    <input type="checkbox" onChange={()=> setToggle(!toggle)}  className='toggle' name="changeMode" id="changeMode" />
</div>
  )
}

export default LightDarkBtn