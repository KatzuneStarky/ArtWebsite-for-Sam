import React from 'react'
import Slider from '../Slider/Slider'
import './HomePage.css'

function HomePage() {
  return (
    <>
        <div className="homePage" style={{
          background: `url('${process.env.PUBLIC_URL}/images/parallaximg2.jpg')`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
          }}>        
          <Slider />           
        </div>    
    </>
  )
}

export default HomePage