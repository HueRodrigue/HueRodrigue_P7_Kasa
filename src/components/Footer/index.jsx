import { Link } from 'react-router-dom'
import React, { Component }  from 'react';
import { ReactComponent as FooterLogo } from '../../assets/footer_Logo.svg';



function Header() {
  return (
    <footer>
        <figure>
            <FooterLogo/>
        </figure>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Header