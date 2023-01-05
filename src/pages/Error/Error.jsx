import React, { Component }  from 'react';
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className='Error-div'>
      <h1 className='Error-div--title'>404</h1>
      <p className='Error-div--description'>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="Error-div--link" to={"/"}>Retourner sur la page d'acceuil</Link>
    </div>
  )
}

export default Error
