import React, { Component }  from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import Card from '../../components/Card/Card.jsx'
import banner from '../../assets/banner.png'
import AboutData from "../../data/AboutData.jsx";

const bannerText = AboutData.text;

function Home() {
  return (
    <div>
      <Banner image={banner} text={bannerText}/>
      <Card />
    </div>
  )
}

export default Home
