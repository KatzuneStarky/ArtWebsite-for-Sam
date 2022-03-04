import React, { useState } from 'react'
import BurguerButton from './BurguerButton'
import './Navbar.css'

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)    
    }
    return (
        <>
            <nav className='navbar'>
                <h2>Samiithedatki<span> Art</span></h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a onClick={handleClick} href="">INICIO</a>
                    <a onClick={handleClick} href="">ARTE</a>
                    <a onClick={handleClick} href="">SOBRE MI</a>
                    <a onClick={handleClick} href="">CONTACTO</a>
                </div>
                <div className="burguer">
                    <BurguerButton clicked={clicked} handleClick = {handleClick} />
                </div>
                <div className={`initial ${clicked ? 'active' : ''}`}></div>
            </nav>   
        </>
    )
}

export default Navbar