import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='Login'>
      <div className="Login-container">
        <h1>Registruotis</h1>
        <div className="LoginSignup-fields">
          <input type="text" placeholder='Vardas'/>
          <input type="email" placeholder='Elektroninis pastas'/>
          <input type="password" placeholder='Slaptazodis'/>
        </div>
        <button>Continue</button>
        <p className="login-login">Jau vienas is musu? <span>Prisijuk</span></p>
        <div className="login-agree">
          <input type = "checkbox" name='' id='' />

        </div>
      </div>
    </div>
  )
}

export default Login
