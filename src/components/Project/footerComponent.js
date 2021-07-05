import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import logo from '../Assets/logo.svg';
const Footer = (props) => {
  return (
    <div style={{backgroundColor:"#0F8797"}}>
        <Row style={{display:"flex", padding:"3%", color:"white"}}>
            <Col xs="6" style={{textAlign:"left"}}>
                <h4>iResearch</h4>
                <p>iResearch is a research project discovery platform working to support student researchers across the entire IIT ecosystem.</p>
                <p>An initiative by IIT Tech Ambit.</p>
            </Col>
            <Col xs="3" style={{textAlign:"left"}}>
                <h4>Quick Links</h4>
                <p>About us IIT Tech Ambit Sign Up</p>
            </Col>
            <Col xs="3" style={{textAlign:"left"}}>
                <h4>Reach Us</h4>
                <p>connect@iit-techambit.in</p>
            </Col>
        </Row>
    </div>
  );
};

export default Footer;