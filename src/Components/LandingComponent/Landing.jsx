import React, { useEffect, useState } from 'react'
import './Landing.css'
import { NavLink } from 'react-router-dom'
import { Collapse } from '@mui/material'

const Landing = () => {
    const imgSlider = (anything) =>{
        var imageChange = document.querySelector('.arte')
        // var circle = document.querySelector('.circle')
        imageChange.src = anything
        imageChange.style.transition = '.5s'
        // circle.style.clipPath = "circle(600px at right 700px)"       
        console.log(imageChange.src)
    }

    const changeColor = (color) =>{
        const circle = document.querySelector('.circle')
        const span = document.querySelector('.spanTxt')
        const linkArt = document.querySelector('.linkArt')
        circle.style.background = color
        span.style.color = color
        linkArt.style.background = color
    }

    const [checked, setChecked] = useState(false)

    useEffect(() => {        
        imgSlider('/images/willow2Transparent.png')
        changeColor('#1C5EA4')
        setChecked(true)
    }, [])
  return (
    <>
        <section id='Landing'>
            <div className="circle">
            </div>
            <header>
                <NavLink to={"/"}>
                    <img className='logo' src={process.env.PUBLIC_URL + "images/Samiithedarki_logo.png"} alt="" />
                </NavLink>
            </header>
            <div className="content">
                <Collapse
                    in={checked}
                    {...(checked ? { timeout: 1000 } : {} )} 
                    collapsedheight= {50}
                    >
                    <div className="textBox">
                        <h2>Arte para todos<br />Por<span className='spanTxt'> Samiithedarki!</span></h2>
                        <p></p>
                        <NavLink to={"/arte"} className='linkArt'>Ver su arte</NavLink>
                    </div>
                </Collapse>
                <div className="imgBox">
                    <img alt={'/images/willow2Transparent.png'} className='arte' />
                </div>
            </div>
            <ul className="thumb">
                <li>
                    <img 
                        src={process.env.PUBLIC_URL + "images/willow2Transparent.png"} 
                        alt=""
                        className='imgtb' 
                        onClick={() => 
                            { 
                                imgSlider("/images/willow2Transparent.png"); 
                                changeColor('#1C5EA4');                                
                            } 
                    } />
                </li>
                <li>
                <img 
                        src={process.env.PUBLIC_URL + "images/gorgiesMarkTransparent.png"} 
                        alt="" 
                        className='imgtb'
                        onClick={() => 
                            { 
                                imgSlider("/images/gorgiesMarkTransparent.png"); 
                                changeColor('#B07711')                                 
                            } 
                    } />
                </li>
                <li>
                <img 
                        src={process.env.PUBLIC_URL + "images/GorgieTransparent.png"} 
                        alt="" 
                        className='imgtb'
                        onClick={() => 
                            { 
                                imgSlider("/images/GorgieTransparent.png"); 
                                changeColor('#F8AF2A')  
                            } 
                    } />
                </li>
            </ul>    
        </section>
    </>
  )
}

export default Landing