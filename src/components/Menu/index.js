import React from 'react';
import Logo from '../../assets/images/Logo.png'
import './menu.css'
import Button from '../Button'


function Menu(){
  return(
    <nav className="Menu">
      <a href="/">
        <img className = "Logo" src={Logo} alt="DroidFlix"></img>
      </a>

      <Button as ='a' className="Buttonlink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu;