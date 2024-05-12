import React, { useState } from 'react'
import './CSS/Login.css'

const Login = () => {

const [state,setState] = useState("Registracija");


  return (
    <div className='Login'>
      <div className="Login-container">
        <h1>{state}</h1>
        <div className="LoginSignup-fields">
          {state === "Registracija"?<input type="text" placeholder='Vardas'/>:<></>}
          <input type="email" placeholder='Elektroninis paštas'/>
          <input type="password" placeholder='Slaptažodis'/>
        </div>
        <button>Tęsti</button>
        {state === "Registracija"?<p className="login-login">Jau vienas iš mūsų? <span onClick={()=>{setState("Prisijunk")}}>Prisijunk</span></p>:<></>}
        {state === "Prisijunk"?<p className="login-login">Neturi prisijungimo? <span onClick={()=>{setState("Registracija")}}>Prisiregistruok</span></p>:<></>}
        <div className="login-agree">
          <input type = "checkbox" name='' id='' />
          <p> Tęsdami sutinkate su privatumo politika </p>
        </div>
      </div>
    </div>
  )
}

export default Login
