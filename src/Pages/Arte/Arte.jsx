import React from 'react'
import ImageList from '../../Components/ImageList/ImagesList'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Upload from '../../Components/Upload/Upload'
import ImgNav from '../../Components/imgNav/ImgNav'
import { Container } from '@mui/material'
import AuthContext from '../../context/AuthContext'
import Modal from '../../Components/Modal/Modal'

const Arte = () => {
  return (
    <>
      <div style={{background: `url(${process.env.PUBLIC_URL}'/images/parallaximg2.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
        <Navbar />
        <Container maxWidth="lg" sx={{textAlign: 'center'}}>
          {/* <AuthContext>
            <Modal />
            
          </AuthContext> */}
            <ImgNav />        
            <ImageList />
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Arte