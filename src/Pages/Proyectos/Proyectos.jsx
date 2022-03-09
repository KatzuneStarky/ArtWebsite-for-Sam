import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare } from '@fortawesome/free-regular-svg-icons'
import './Proyectos.css'
import Footer from '../../Components/Footer/Footer'

const Proyectos = () => {
  return (
    <>
      <section id="projects">
        <div className="container">
          <h2 className="section-heading" data-text="Proyectos">Proyectos</h2>
          <div className="all-items">
            {/* Proyecto 1 */}
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={process.env.PUBLIC_URL + "images/Samiithedarki_logo.png"} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">Lorem ipsum dolor sit amet.</h2>
                <h3 className="project-sub-title">Lorem, ipsum.</h3>
                <p className="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo accusantium earum neque assumenda rem, quia quo officia fuga libero?</p>
                <div className="buttons">
                  <NavLink to={"/"} className='primary-btn saber-mas'>Saber mas</NavLink>
                  <NavLink to={"/"} className='primary-btn outline external-link'>
                    <span>Ver Proyecto </span>
                    <FontAwesomeIcon icon={faShareSquare} />
                  </NavLink>
                </div>
              </div>
            </div>  
            
            {/* Proyecto 2 */}
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={process.env.PUBLIC_URL + "images/Samiithedarki_logo.png"} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">Lorem ipsum dolor sit amet.</h2>
                <h3 className="project-sub-title">Lorem, ipsum.</h3>
                <p className="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo accusantium earum neque assumenda rem, quia quo officia fuga libero?</p>
                <div className="buttons">
                  <NavLink to={"/"} className='primary-btn saber-mas'>Saber mas</NavLink>
                  <NavLink to={"/"} className='primary-btn outline external-link'>
                    <span>Ver Proyecto </span>
                    <FontAwesomeIcon icon={faShareSquare} />
                  </NavLink>
                </div>
              </div>
            </div>

          {/* Proyecto 3 */}
          <div className="item">
              <div className="left">
                <div className="img">
                  <img src={process.env.PUBLIC_URL + "images/Samiithedarki_logo.png"} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="project-title">Lorem ipsum dolor sit amet.</h2>
                <h3 className="project-sub-title">Lorem, ipsum.</h3>
                <p className="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo accusantium earum neque assumenda rem, quia quo officia fuga libero?</p>
                <div className="buttons">
                  <NavLink to={"/"} className='primary-btn saber-mas'>Saber mas</NavLink>
                  <NavLink to={"/"} className='primary-btn outline external-link'>
                    <span>Ver Proyecto </span>
                    <FontAwesomeIcon icon={faShareSquare} />
                  </NavLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Proyectos