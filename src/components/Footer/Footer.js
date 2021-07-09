import React from 'react';
import './Footer.css'; 
import fbURL from '../Assets/fb_logo.svg'
import igURL from '../Assets/ig_logo.svg'
import {Container, Row, Col} from 'reactstrap';

const Footer = () => (
    <div className="footer" style={{backgroundColor:"#0F8797"}}>
      
        <Row style={{backgroundColor:"#0F8797"}}>
            <Col>
                <h2>iResearch</h2>
                <p>iResearch is a research project discovery platform working to support student researchers across the entire IIT ecosystem.</p> 
                {/* <p> <span>An initiative by IIT Tech Ambit.</span>
                </p> */}
                
            </Col>
            <Col>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href = "#">About us</a></li>
                    {/* <li><a href = "#">IIT Tech Ambit</a></li> */}
                    <li><a href = "#">Sign up</a></li>
                </ul>
            </Col>
            <Col>
                <h2>Reach Us</h2>
                <p>connect@iresearch.in</p>    
                <a href ='#' style={{marginRight:"0.5%"}}><img src={fbURL}/></a>
                <a href ='#'><img src={igURL}/></a>
            </Col>
        </Row>
      
    </div>
  );
  
  export default Footer;