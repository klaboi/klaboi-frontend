import React from 'react';
import './Header.css'; 
import logoUrl from '../Assets/logo.svg'
import logoUrlm from '../Assets/logom.svg'


const Header = () => (
    <div className="header">
      <img src={logoUrl} alt="iResearch" />
      <span><img src={logoUrlm}/></span>
      
    </div>
  )
  export default Header;