import React, { Component }  from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import banner from '../../assets/banner2.png'
import AboutData from "../../data/AboutData.jsx";
import Collapsible from '../../components/Collapse/Collapse.jsx';

function About() {

  // Switch to display content in the dropdown by title
  const content = (title) => {
    switch (title) {
      case "fiability":
        return AboutData.fiability;
      case "respect":
        return AboutData.respect;
      case "service":
        return AboutData.service;
      case "sécurity":
        return AboutData.security;
      default:
        console.log("default");
        break;
    }
  };
  return (
    <div className="about">
      <Banner image={banner} />
      <div className="about__dropdowns">
      <Collapsible title="fiabilité" content={content("fiability")} />
      <Collapsible title="respect" content={content("respect")} />
      <Collapsible title="service" content={content("service")} />
      <Collapsible title="sécurité" content={content("sécurity")} />
      </div>
    </div>
  )
}

export default About