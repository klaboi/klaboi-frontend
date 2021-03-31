import React from 'react';
import './Header.css'; 
import logoUrl from '../Assets/logo-white.svg'
import logoUrlm from '../Assets/logom.svg'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => (
    <div className="header">
      <nav class = "navbar">
        <a class = "navbar-brand" href="#">  
          <img src={logoUrl} alt="iResearch" class="d-inline-block align-top" />
          iResearch
        </a>
      </nav>
    </div>
  )
  export default Header;