import React from 'react'
import { NavLink } from "react-router-dom"
import { Outlet } from "react-router"


const About = () => {
  return (
    <div className="about-layout">
     
      <nav>
        <NavLink to="reviews">Reviews</NavLink>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet/>
      <div className="about-div">
      <h2>Our Mission </h2>
      <div className="container">
        <div className="skills css" width="10px">80% of established artist display their work here</div>
      </div>
      <div className="container">
        <div className="skills html" width="10px">90% of new artist display their work here</div>
      </div>
      <div className="container">
        <div className="skills js" width="10px">100% Free</div>
      </div>
      <p id='abp'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, eligendi.</p>
      </div>
    </div>
  )
}

export default About