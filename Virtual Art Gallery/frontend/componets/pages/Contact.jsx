import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Contact = () => {
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  let loading = false

  function sendContact(e) {
    e.preventDefault()
    console.log(e);

    const CreateContact = async () => {
      try {
        loading = true
        await fetch('http://localhost:5051/contacts', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: document.querySelector('.contact-name').value,
            email: document.querySelector('.contact-email').value,
            message: document.querySelector('.contact-message').value
          })
        })
        loading = false
        navigate('/')
      } catch (error) {
        loading = false
        console.log(error.message);
      }
    }
    if (!loading) {
      CreateContact()
    }
  }
  return (
    <div className='w3-container w3-center w3-padding-32' id="contact" >
      <div className="info ">
        {/* <h2 className="w3-wide" id='contact-h2'>Contact</h2> */}
        <div class="container1">
          <div class="domino" >C</div>
          <div class="domino" >O</div>
          <div class="domino" >N</div>
          <div class="domino" >T</div>
          <div class="domino" >A</div>
          <div class="domino">C</div>
          <div class="domino">T</div>
          <div class="domino"></div>

          <div class="domino">U</div>
          <div class="domino">S</div>

        </div>
        Sarasota,Fl.<br />
        phone:(941)777-7889<br />
        Email: showtimegallery@gmail.com<br />
      </div>
      <p className=" w3-center" id='contact-p'><i>Artist? inquire about submitting pieces!</i></p>
      <form action="" onSubmit={sendContact}>
        {loading}

        <input type="text" className="w3-input contact-name w3-animate-input" placeholder="Name&#128100;" required name="Name" id='name' />
        <input type="text" className="w3-input contact-email w3-animate-input" placeholder="Email&#128229;" required name="Email" id='email' />
        <textarea type="text" className="w3-input contact-message w3-animate-input" placeholder="Message&#128393;" required name="Message" id='mess' /> <br />
        <button className='w3-button w3-round-xlarge' type='submit' id='send-btn'>Send <i className="bi bi-send"></i></button>
      </form>
      <img src="/public/background.png" className="w3-image w3-grayscale-max" width='100%' ></img>
    </div>
  )
}

export default Contact