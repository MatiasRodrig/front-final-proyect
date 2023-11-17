import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signUp } from '../api/apis';
import Navbar from '../components/Navbar';

import '../styles/register.css'

//---------------------------------------------
// TODO: VALIDAR CAMPOS. TOAST EN CASO DE ERROR
//---------------------------------------------

const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signUpFunction = () => {
    signUp(firstName, lastName, email, password)
    .then((res) => {
      window.sessionStorage.setItem('token', res.data.token);
      navigate('/');
    });
  }
  
  //----------------------------------------------

  /* const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }; */

  /* const handleRegister = () => {
    // Agrega la lógica de registro aquí
    if (fullName && email && password) {
      // Realiza el registro, por ejemplo, llamando a una API o almacenando los datos
      // Redirige al usuario después del registro exitoso
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }; */

  return (
    <>
      <Navbar />
      <div className="register-page">
        <h1 className='register-title'>Registrarse</h1>
        <div className="register-form">
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <input
              required
              type="text"
              id="fullName"
              name="firstName"
              //value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input
              required
              type="text"
              id="fullName"
              name="lastName"
              //value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              required
              type="email"
              id="email-register"
              name="email"
              //value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              required
              type="password"
              id="password"
              name="password"
              //value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='register-button-click' 
            onClick={() => signUpFunction()}
            disabled = {firstName && lastName && email && password ? false : true} // Si los campos existen, entonces no esta deshabilitado el boton
          >
            Registrarse
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
