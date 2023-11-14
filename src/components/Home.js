import React from 'react'
import Promo from './Promo'
import Av from '../components/Av';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Header from './Header';
import Footer from './Footer';
import "./Home.css"
const Home = () => {
  return (
    <>
        <Header/>
        <Carousel/>
        <Av/>
        <Services/>
        <Promo/>
        <Footer/>
    </>
  )
}

export default Home;