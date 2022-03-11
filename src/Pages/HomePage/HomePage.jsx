import React from 'react'
import './HomePage.css'
import Slider from '../../Components/Slider/Slider'
import Footer from '../../Components/Footer/Footer'
import Landing from '../../Components/LandingComponent/Landing'
import BookImage from '../../Components/BookImage/BookImage'
import CardArt from '../../Components/CardArt/CardArt'
import dibujos from '../../dibujos'
import useWindowPosition from '../../hook/useWindowPosition'
import Blog from '../Blog/Blog'

function HomePage() {
const checked = useWindowPosition('Landing')
  return (
    <>
        <div className="homePage" style={{background: `url(${process.env.PUBLIC_URL}'/images/parallaximg2.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>   
          <Landing />
          <Slider />
          <h1 className='h1-txt'>El paso del tiempo en mis dibujos</h1>         
          <div style={{display: 'flex', minHeight: '100vh', justifyContent: 'center', alignItems: 'center'}} id='cards'>           
            <CardArt dibujo={dibujos[0]} checked={checked} />  
            <CardArt dibujo={dibujos[1]} checked={checked} />
          </div>       
          <BookImage />     
          <Blog />              
          <Footer />           
        </div>    
    </>
  )
}

export default HomePage