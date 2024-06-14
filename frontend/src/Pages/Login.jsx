import React, { useState } from 'react'
import './CSS/Login.css'

const Login = () => {
  const [state, setState] = useState("Registracija");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async () => {
    console.log("Login zjbs", formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      if (formData.email === "admin@localhost.com") {
        window.open('http://localhost:5173/', '_blank');
      }
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  }

  const signup = async () => {
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      let errorMessages = '';
      responseData.errors.forEach(error => {
        errorMessages += error.msg + '\n';
      });
      alert(errorMessages);
    }
  }

  return (
    <div className='Login'>
      <div className="Login-container">
        <h1>{state}</h1>
        <div className="LoginSignup-fields">
          {state === "Registracija" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Vardas' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Elektroninis paštas' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Slaptažodis' />
        </div>
        <button onClick={() => { state === "Prisijunk" ? login() : signup() }}>Tęsti</button>
        {state === "Registracija" ? <p className="login-login">Jau vienas iš mūsų? <span onClick={() => { setState("Prisijunk") }}>Prisijunk</span></p> : <></>}
        {state === "Prisijunk" ? <p className="login-login">Neturi prisijungimo? <span onClick={() => { setState("Registracija") }}>Prisiregistruok</span></p> : <></>}
        <div className="login-agree">
          <input type="checkbox" name='' id='' />
          <p> Tęsdami sutinkate su privatumo politika </p>
        </div>
      </div>
    </div>
  )
}

export default Login
