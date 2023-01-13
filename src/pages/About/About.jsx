import React, { Component }  from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import banner from '../../assets/banner2.png'
import AboutData from "../../data/AboutData.jsx";
import Collapsible from '../../components/Collapse/Collapse.jsx';

function About() {

  // Switch pour connaitre le contenu des collapses
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
    // Mise en place des collapses
    <div className="about">
      <Banner image={banner} />
      <div className="about__dropdowns">
      <Collapsible title="Fiabilité" content={content("fiability")} />
      <Collapsible title="Respect" content={content("respect")} />
      <Collapsible title="Service" content={content("service")} />
      <Collapsible title="Sécurité" content={content("sécurity")} />
      </div>
    </div>
  )
}

export default About