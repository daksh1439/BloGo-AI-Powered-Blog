import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Bloglist from '../components/Bloglist'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const home = () => {
  return (
    <>
      <Navbar/>
      <Header></Header>
      <Bloglist/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default home
