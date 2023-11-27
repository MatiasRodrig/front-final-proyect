
import '../styles/contact.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f13xfp7', 'template_oqauavd', form.current, 'zwO2JXUOpU45vGmWr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-title-and-subtitle">
          <h1>Contacto</h1>
          <p>¡Contáctanos para cualquier pregunta o comentario!</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label className='label-container' htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="user_name" />
          </div>

          <div className="form-group">
            <label className='label-container' htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email-contact" name="user_email" />
          </div>

          <div className="form-group">
            <label className='label-container' htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" />
          </div>

          <input type="submit" className='contact-button-send' value='Enviar' />
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
