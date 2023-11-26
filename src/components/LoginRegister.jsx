import React from 'react'
import { Link } from 'react-router-dom'

function LoginRegister() {
    return (
        <>
            <ul className="login-register">
                <li className="login">
                    <Link to={'/login'}>
                        <button>Iniciar Sesión</button>
                    </Link>
                </li>
                <li className="register">
                    <Link to={'/register'}>
                        <button>Registrarse</button>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default LoginRegister