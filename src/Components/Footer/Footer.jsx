import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faDeviantart, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </figure>
            </div>
            <div className="box">
                <figure>
                    <h2>SOBRE MI</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </figure>    
            </div>
            <div className="box">
                <figure>
                    <h2>SIGUEME</h2>
                    <div className="red-social">
                        <a href="">   
                            <FontAwesomeIcon icon={faFacebook} />                     
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faTwitter} />    
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faInstagram} />     
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faDeviantart} /> 
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faTelegram} /> 
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faDiscord} /> 
                        </a>
                    </div>
                </figure>    
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2022 <b>Kitsune Web Desgin</b> - Todos los derechos reservados.</small>
        </div>
    </footer>
  )
}

export default Footer