import React from 'react'
// import { useState } from "react"
import { Navigate } from "react-router-dom"


const About = () => {
  return (
    <div className='w3-container   w3-xlarge w3-padding-64 boutDiv'>
      <h3 className='w3-center w3-jumbo bout-h3 w3-animate-top'>About</h3>
      <p className='bout-p w3-animate-left'>The SoulFood Restaurant was founded in blabla by Mr. Chapman in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p className='boutStrong-p'><strong>The recipes passed down generation to generation,everything made from stratch!</strong></p>
      <p className='about-P'>We are proud of our interiors.</p>
      <p className='w3-padding-16 w3-stretch'></p>
      <p className="w3-padding-16 w3-stretch">
        <img className='w3-grayscale' src="public/Food/large-inside-of-store.jpg" width='100%' alt="inside-of-store" />
      </p>
      <h1 className='bout-h1 '><b>Opening Hours</b></h1>

      <div className="w3-row hour-row">
        {/* <img src="/public/Food/open-sign.jpg" alt="" /> */}
        <div className="w3-half boutDiv-1" id='open'>
          <p>Mon &amp; Tue 11:00am  -8:00pm</p>
          <p>Wednesday 10:00am - 9:00pm</p>
          <p>Thursday 10:00am - 9:00p</p>
        </div>
        <div className="w3-half boutDiv-2" id='time'>
          <p>Friday 10:00 - 9:30pm</p>
          <p>Saturday 10:00 - 9:03pm</p>
          <p>Sunday 11:00am - 7:00pm</p>
        </div>
      </div>
    </div>
  )
}

export default About
