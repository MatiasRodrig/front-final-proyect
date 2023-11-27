import React from 'react';
import '../styles/footer.css';
// import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';


function Footer() {
    return (
        <>
            <section className="footer">
                <div className="suscribe">
                    <div className="logo-footer">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <p className='join'>Únase a nuestro boletín para mantenerse actualizado sobre funciones y lanzamientos.</p>
                    <input type="email" name="enter-email" id="enter-email" placeholder='Ingresa tu Email' />
                    <button type="submit" value="SUSCRIBETE">Suscribete</button>
                    <p className="privacy-policy">Al suscribirte, aceptas nuestra Política de Privacidad y brinda consentimiento para recibir actualizaciones de nuestra empresa.</p>
                </div>
                <div className='right-container'>
                <div className="about-us">
                    <h2>Sobre Nosotros</h2>
                    <ul className="about-us-list">
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Devoluciones</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Envío</a></li>
                    </ul>
                </div>
                <div className="follow-us">
                    <h2>Síguenos</h2>
                    <ul className="follow-us-list">
                        <li><a href=""><img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/000000/facebook-f.png" alt="facebook-f"/>Facebook</a></li>
                        <li><a href=""><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png" alt="instagram-new--v1"/>Instagram</a></li>
                        <li><a href=""><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/twitter.png" alt="twitter"/>Twitter</a></li>
                        <li><a href=""><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="linkedin"/>Linkedin</a></li>
                </ul>
                </div>
                </div>
            </section>
        </>
    )
}

export default Footer 