import React from 'react'
import './HomePage.css'
import Slider from '../../Components/Slider/Slider'
import Footer from '../../Components/Footer/Footer'
import Landing from '../../Components/LandingComponent/Landing'
import BookImage from '../../Components/BookImage/BookImage'
import CardArt from '../../Components/CardArt/CardArt'
import dibujos from '../../dibujos'
import useWindowPosition from '../../hook/useWindowPosition'

function HomePage() {
const checked = useWindowPosition('Landing')
  return (
    <>
        <div className="homePage">   
          <Landing />  
          <BookImage /> 
          <div style={{display: 'flex', minHeight: '100vh', justifyContent: 'center', alignItems: 'center'}}>
            <CardArt dibujo={dibujos[0]} />  
            <CardArt dibujo={dibujos[1]} />
          </div>  
          <Slider />
          <Footer />           
        </div>    
    </>
  )
}

export default HomePage