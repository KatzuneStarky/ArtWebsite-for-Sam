import React from 'react'
import './HomePage.css'
import Slider from '../../Components/Slider/Slider'
import Footer from '../../Components/Footer/Footer'

function HomePage() {
  return (
    <>
        <div className="homePage" style={{
          background: `url('${process.env.PUBLIC_URL}/images/parallaximg2.jpg')`,          
          backgroundRepeat: 'no-repeat'
          }}>        
          <Slider />
          <Footer />           
        </div>    
    </>
  )
}

export default HomePage