import { Link } from 'react-router-dom'
import React, { Component }  from 'react';
import { ReactComponent as HeaderLogo } from '../../assets/header_Logo.svg';



function Header() {
  return (
    <header>
    <figure>
      <HeaderLogo/>
    </figure>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
    </header>
  )
}

export default Header
