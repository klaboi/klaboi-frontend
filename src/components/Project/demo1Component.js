import logo from '../Assets/logo.svg';
import React, { Component } from "react";
import HeaderComponent from './headerComponent';
import Footer from '../Footer/Footer'
import CardComponent from './cardComponent';
import CarouselComponent from './carouselComponent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
function example() {
  return (
    <div className="App">
      <div style={{padding:"2%"}}>
          <h2 style={{textAlign:"left"}}>Project title</h2>
      </div>
      <Row style={{display:"flex"}}>
                <Col xs="3">4 Months</Col>
                <Col xs="2">4 Students</Col>
                <Col xs="2">???</Col>
                <Col xs="2" style={{color:"red"}}>Apply by 22nd Feb</Col>
                <Col xs="3">40 Application</Col>
        </Row>
        <br/><br/><br/>
        <div>
        <Row style={{display:"flex", fontWeight:"bold"}}>
                <Col xs="2">Institute</Col>
                <Col xs="2">Roll no.</Col>
                <Col xs="2">Full name</Col>
                <Col xs="1">Emails</Col>
                <Col xs="1">Phone</Col>
                <Col xs="1">SOP</Col>
                <Col xs="1">CV</Col>
                <Col xs="2">Action</Col>
        </Row>
        </div>
        <br/>
        <div>
        <Row style={{display:"flex"}}>
                <Col xs="2">IIT Kharagpur</Col>
                <Col xs="2">1</Col>
                <Col xs="2">xyz</Col>
                <Col xs="1"></Col>
                <Col xs="1">1234</Col>
                <Col xs="1"></Col>
                <Col xs="1"></Col>
                <Col xs="2">No Action</Col>
        </Row>
        </div>
        <br/>
        <div>
        <Row style={{display:"flex"}}>
                <Col xs="2">IIT Kanpur</Col>
                <Col xs="2">2</Col>
                <Col xs="2">abc</Col>
                <Col xs="1"></Col>
                <Col xs="1">1234</Col>
                <Col xs="1"></Col>
                <Col xs="1"></Col>
                <Col xs="2">No Action</Col>
        </Row>
        </div>
        <br/>
        <div>
        <Row style={{display:"flex"}}>
                <Col xs="2">IIT Bombay</Col>
                <Col xs="2">3</Col>
                <Col xs="2">pqr</Col>
                <Col xs="1"></Col>
                <Col xs="1">1234</Col>
                <Col xs="1"></Col>
                <Col xs="1"></Col>
                <Col xs="2">No Action</Col>
        </Row>
        </div>
    </div>
  );
}

export default example;