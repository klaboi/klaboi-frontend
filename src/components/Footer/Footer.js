import React from 'react';
import './Footer.css'; 
import fbURL from '../Assets/fb_logo.svg'
import igURL from '../Assets/ig_logo.svg'


const Footer = () => (
    <div className="footer">
      <div className="container">
        <div class="row">
            <div class="column left">
                <h2>iResearch</h2>
                <p>iResearch is a research project discovery platform working to support student researchers across the entire IIT ecosystem.</p> 
                <p> <span>An initiative by IIT Tech Ambit.</span>
                </p>
                
            </div>
            <div class="column middle">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href = "#">About us</a></li>
                    <li><a href = "#">IIT Tech Ambit</a></li>
                    <li><a href = "#">Sign up</a></li>
                </ul>
            </div>
            <div class="column right">
                <h2>Reach Us</h2>
                <p>connect@iit-techambit.in</p>    
                <li><a href ='#'><img src={fbURL}/></a></li>
                <li><a href ='#'><img src={igURL}/></a></li>
            </div>
        </div>
      </div>
    </div>
  );
  
  export default Footer;