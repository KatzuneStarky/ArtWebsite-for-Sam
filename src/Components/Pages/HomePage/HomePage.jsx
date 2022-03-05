import React from 'react'
import Footer from '../../Footer/Footer'
import Slider from '../../Slider/Slider'
import './HomePage.css'

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