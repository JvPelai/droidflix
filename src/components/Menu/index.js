import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/Logo.png'
import './menu.css'
import Button from '../Button'


function Menu(){
  return(
    <nav className="Menu">
      <Link href="/">
        <img className = "Logo" src={Logo} alt="DroidFlix"></img>
      </Link>

      <Button as ={Link} className="ButtonLink" to="/cadastro/Video">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu;