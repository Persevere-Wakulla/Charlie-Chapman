import React from 'react'

const SignIn = ({log}) => {

  const sign = async (e) =>{
    e.preventDefault()
    const req = await fetch('http://localhost:5050/', {
      method: "POST",
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: username.value,
        password: password.value
      })
    })
    const res = req.json()
    if(res){
      log(res)
    } else {
      console.log('user not found');
    }

  }

  return (
    <div className='form-div'>
      <form action="" onSubmit={sign} id='div-form'>
      <input type="text" id='username' placeholder='username' />
      <input type="password" id='password' placeholder='password' />
      <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn