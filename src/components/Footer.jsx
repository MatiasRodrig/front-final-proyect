import React from 'react'
import '../styles/footer.css'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
=======
>>>>>>> 6457e4766c2ae7334a8a41231b558e5d434203c9

function Footer() {
    return (
        <>
            <section className="footer">
                <div className="suscribe">
                    <div className="logo-footer">
                        <img src="" alt="" />
                    </div>
                    <p className='join'></p>
                    <input type="email" name="enter-email" id="enter-email" placeholder='Ingresa tu Email' />
                    <button type="submit" value="SUSCRIBETE">Suscribete</button>
                    <p className="privacy-policy"></p>
                </div>
                <div className="about-us">
                    <h2>Sobre Nosotros</h2>
                    <ul className="about-us-list">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <h2>Síguenos</h2>
                <div className="follow-us">
                    <ul className="follow-us-list">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
                </div>
            </section>
        </>
    )
}

export default Footer