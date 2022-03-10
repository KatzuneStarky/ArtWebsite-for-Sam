import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faDeviantart, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons"
import './Contacto.css'
import emailjs, { init } from '@emailjs/browser';

const Result = () => {
  return(
    <p>tu mensaje a sido enviado! te contactare pronto</p>
  )
}

function Contacto(props){
  const form = useRef();
  const [result, showResult] = useState(false)
  const sendEmail = (e) =>{    
    emailjs.sendForm(
        'service_tdt7iic', 
        'template_cz35fm4', 
        e.target, 
        init("egy5hF29kyDURzd19")
      ).then((result) => {
        console.log(result.text)
      }, (err) => {
        console.log(err.text)
        })
      e.target.reset()
      showResult(true)
  }
  return (
    <>
      <section className='section-contact' style={{background: `url(${process.env.PUBLIC_URL}'/images/parallaximg2.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
        <div className="container-contact">
          <div className="contactInfo">
            <div>
              <h2>Informacion de contacto</h2>
              <ul className="info">
                <li>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <span>La paz <br /> Baja California Sur</span>
                </li>

                <li>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span>example@example.com</span>
                </li>
              </ul>
            </div>

            <ul className="social-media">
              <li><a href="https://www.facebook.com/itssamthedark" target={"_blank"}> <FontAwesomeIcon icon={faFacebook} /> </a></li>
              <li><a href="https://twitter.com/samiithedarki" target={"_blank"}> <FontAwesomeIcon icon={faTwitter} /> </a></li>
              <li><a href="https://www.instagram.com/samiithedarki/" target={"_blank"}> <FontAwesomeIcon icon={faInstagram} /> </a></li>
              <li><a href="https://www.deviantart.com/xxtotal-darknessxx" target={"_blank"}> <FontAwesomeIcon icon={faDeviantart} /> </a></li>
              <li><a href="https://t.me/Samiithedarki" target={"_blank"}> <FontAwesomeIcon icon={faTelegram} /> </a></li>
            </ul>

          </div>
          <div className="contactForm">
            <h2>Envia un mensaje</h2>
            <form className="formBox" ref={form} onSubmit={sendEmail}>
              <div className="inputBox w50">
                <input type="text" name='name' required />
                <span>Nombre</span>
              </div>

              <div className="inputBox w50">
                <input type="text" name='lastName' required />
                <span>Apellidos</span>
              </div>

              <div className="inputBox w50">
                <input type="email" name='email' required />
                <span>Correo Electronico</span>
              </div>

              <div className="inputBox w50">
                <input type="text" name='phone_number' required />
                <span>Numero Telefonico</span>
              </div>

              <div className="inputBox w100">
                <textarea name='message' required></textarea>
                <span>Escribe tu mensaje aqui...</span>
              </div>

              <div className="inputBox w50">
                <input type="submit" value={"Enviar"} />
              </div>
            </form>
            <div>
              {result ? <Result /> : null}
            </div>  
          </div>
        </div>        
      </section>
    </>
  )
}

export default Contacto