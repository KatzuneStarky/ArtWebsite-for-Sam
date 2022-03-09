import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faDeviantart, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <NavLink to={"/"}>
                        <img src={process.env.PUBLIC_URL + "/images/Samiithedarki_logo.png"} alt="" />
                    </NavLink>
                </figure>
            </div>
            <div className="box">
                <figure>
                    <h2>SOBRE MI</h2>
                    <p>Artista Furry por hobbie, graduado de Asistencia en Programacion.</p>
                    <p>Actualmente estudiando Diseño Grafico, especializado en Arte Digital.</p>
                </figure>    
            </div>
            <div className="box">
                <figure>
                    <h2>SIGUEME</h2>
                    <div className="red-social">
                        <a href="https://www.facebook.com/itssamthedark" target={'_blank'}>   
                            <FontAwesomeIcon icon={faFacebook} />                     
                        </a>
                        <a href="https://twitter.com/samiithedarki" target={'_blank'}>
                            <FontAwesomeIcon icon={faTwitter} />    
                        </a>
                        <a href="https://www.instagram.com/samiithedarki/" target={'_blank'}>
                            <FontAwesomeIcon icon={faInstagram} />     
                        </a>
                        <a href="https://www.deviantart.com/xxtotal-darknessxx" target={'_blank'}>
                            <FontAwesomeIcon icon={faDeviantart} /> 
                        </a>
                        <a href="https://t.me/Samiithedarki" target={'_blank'}>
                            <FontAwesomeIcon icon={faTelegram} /> 
                        </a>
                        <a onClick={() => {navigator.clipboard.writeText("Samiithedarki#2955"); alert("Usuario copiado")}}>
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