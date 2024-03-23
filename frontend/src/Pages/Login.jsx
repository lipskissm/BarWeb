import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='Login'>
      <div className="Login-container">
        <h1>Registruotis</h1>
        <div className="LoginSignup-fields">
          <input type="text" placeholder='Vardas'/>
          <input type="email" placeholder='Elektroninis paštas'/>
          <input type="password" placeholder='Slaptažodis'/>
        </div>
        <button>Tęsti</button>
        <p className="login-login">Jau vienas iš mūsų? <span>Prisijunk</span></p>
        <div className="login-agree">
          <input type = "checkbox" name='' id='' />
          <p> Tęsdami sutinkate su privatumo politika </p>
        </div>
      </div>
    </div>
  )
}

export default Login
