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
      <Navbar />
      <Container maxWidth="lg" sx={{textAlign: 'center', mt: '3rem'}}>
        {/* <AuthContext>
          <Modal />
          
        </AuthContext> */}
          <ImgNav />
          <Upload />
          <ImageList />
      </Container>
      <Footer />
    </>
  )
}

export default Arte