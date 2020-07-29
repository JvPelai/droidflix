import React from 'react';
import Logo from '../../assets/images/Logo.png'
import './menu.css'
import ButtonLink from './ButtonLink/index.js'


function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img className = "Logo" src={Logo} alt="DroidFlix"></img>
      </a>

      <ButtonLink className="Buttonlink" href="/">
        Novo Vídeo
      </ButtonLink>
    </nav>
  )
}

export default Menu;