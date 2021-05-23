import React, {Component} from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Carousel from '../Project/carouselComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter, Route, Link, Switch } from "react-router-dom";

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
  } from 'reactstrap';

  import logo from '../Assets/kgp.svg';
class example extends Component{

  render(){
    return (
    <div className="home" style ={{minHeight:"100vh", display:"flex", flexDirection:"column"}}>
    <Header/>
        
        <div >
          <img src="https://socialmediacollege.com/wp-content/uploads/5-Creative-Ways-to-Use-Facebooks-Carousel-Ads.png" alt="" style={{maxWidth:"100%", padding:"5%", backgroundSize:"cover", backgroundPosition:"cover"}}/>
        </div>
        <div className="container" style={{padding: "1rem"}}>
        <div>
            <h2>Project Title</h2>
            Professor Richard Feynman               
        </div>
        <br/>
        <div style={{fontWeight:"bold"}}>
          <Row style = {{display: "flex"}}><Col xs="3">3 Months</Col>
                 <Col xs="3">5000</Col>
          </Row>
          <Row style = {{displey: "flex"}}><Col xs="3">3</Col>
                 <Col xs="3">31st January</Col>
          </Row>
        </div>
        <br/><br/>
        <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </div>

        <br/>
        <div>
            <h4>Responsibilities</h4>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </div>

        <br/>
        <div>
            <h4>Prerequisites</h4>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </div>

        <br/>
        <div>
            <h4>Additional Details</h4>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </div>

        <br/>
        <div>
            <h4>Tags</h4><br/>
            <Row style = {{display: "flex"}}><Col xs="2"><Button style={{
                        backgroundColor: "#d3d3d3",
                        color: "white",
                        width: "100%",
                        textAlign:"center",
                        borderRadius: "20px",
                        borderColor: "#d3d3d3"
                      }}>Tag 1
            </Button></Col>
                 <Col xs="2"><Button style={{
                        backgroundColor: "#d3d3d3",
                        color: "white",
                        width: "100%",
                        textAlign:"center",
                        borderRadius: "20px",
                        borderColor: "#d3d3d3"
                      }}>Tag 2
            </Button></Col>
                 <Col xs="2"><Button style={{
                        backgroundColor: "#d3d3d3",
                        color: "white",
                        width: "100%",
                        textAlign:"center",
                        borderRadius: "20px",
                        borderColor: "#d3d3d3"
                      }}>Tag 3
            </Button></Col>
            </Row>
            </div><br/><br/>
      </div>
      <br></br>
      <center>
       <Button style={{
                        backgroundColor: "#0F8797",
                        color: "white",
                        width: "15%",
                        textAlign:"center"
                      }}>Apply
       </Button>
      </center>
      <Carousel/>
      <br/><br/>
      <Footer/>
    </div>
  );
}}
  
  export default example;