import React from 'react';
import fbURL from '../Assets/fb_logo.svg'
import igURL from '../Assets/ig_logo.svg'
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import logo from '../Assets/logo.svg';
const Footer = (props) => {
  return (
    <div style={{backgroundColor:"#3F6CA1"}}>
        <Row style={{display:"flex", padding:"3%", color:"white", width:"100%"}}>
            <Col sm="6" style={{textAlign:"left"}}>
                <h4>iResearch</h4>
                <p>iResearch is a research project discovery platform working to support student researchers across the entire IIT ecosystem.</p>
                {/* <p>An initiative by IIT Tech Ambit.</p> */}
            </Col>
            <Col sm="3" style={{textAlign:"left"}}>
                <h4>Quick Links</h4>
                <p>About us IIT Sign Up</p>
            </Col>
            <Col sm="3" style={{textAlign:"left"}}>
                <h4>Reach Us</h4>
                <p>connect@iresearch.in</p>
                <a href ='#' style={{marginRight:"0.5%"}}><img src={fbURL}/></a>
                <a href ='#'><img src={igURL}/></a>
            </Col>
        </Row>
    </div>
  );
};

export default Footer;