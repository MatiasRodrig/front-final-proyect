import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signIn } from '../api/apis';
import Navbar from '../components/Navbar';

import '../styles/login.css'

//---------------------------------------------
// TODO: VALIDAR CAMPOS. TOAST EN CASO DE ERROR
//---------------------------------------------

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const SignInFunction = () => {
    signIn(email, password)
      .then((res) => {
        window.sessionStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch((error) => {
        //TOAST PARA EL ERROR: USUARIO NO ENCONTRADO
        console.log(error);
      });
  }

  //--------------------------------------------

  /* const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleLogin = () => {
    // Agrega la lógica de autenticación aquí
    if (email && password) {
      // Realiza la autenticación, por ejemplo, llamando a una API o validando los datos
      // Redirige al usuario después del inicio de sesión exitoso
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }; */

  return (
    <>
      <Navbar />
      <div className="login-page">
        <h1 className='login-title'>Iniciar Sesión</h1>
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              className='input-container'
              type="email"
              id="email"
              name="email"
              //value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              className='input-container'
              id='password'
              name="password"
              //value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='login-button-click' onClick={() => SignInFunction()}>Iniciar Sesión</button>
        </div>
      </div>
    </>
  );
}

export default Login;