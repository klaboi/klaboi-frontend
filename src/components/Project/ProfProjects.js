import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import logo from '../Assets/kgp.svg';
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import '../../pages/Project/Project.css';
import Navbar from '../Navbar';
import CarouselComponent from './carouselComponent';
import FooterComponent from './footerComponent';

export function CardComponent ({props}) {

  const [projects, setProjects] = useState(null);
  const [data, setData] = useState("");
  const credentials = localStorage.getItem('currentUser');
  const getProjects = async() => {
  var myHeaders = new Headers();
  myHeaders.set('Authorization', 'Basic ' + credentials);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  let response;

    try {
        response = await fetch (process.env.REACT_APP_API_ENDPOINT +"/projects/owner", requestOptions)
    } catch (err) {
        return;
    }
    const result = await response.json();
    setData(result);
  }
  console.log(data);
  useEffect(() => {
    getProjects();
  }, []);


  return (<div style={{
      padding: "0% 3% 3% 3%"
    }}>
    {
      data && data.Items.map((data, index) => {
        return (<Card style={{
            textAlign: "left",
            margin:"3%",
            padding:"3%"
          }}>
          <Row style={{
              display: "flex"
            }}>
            <Col sm="3">
              <CardImg top="top" style = {{width:"80%", margin: "0.1rem"}} src={logo} alt="Card image cap"/>
            </Col>
            <Col sm="9">
              <CardBody>
                <CardTitle tag="h5" style={{fontWeight:"bold"}}>Project title</CardTitle>
                <Row style = {{display: "flex"}}><Col sm="6">{data.profName}</Col>
                 <Col sm="6">{data.dept}</Col>
                 </Row>
                <CardText style={{color:"#000000"}}>{data.description}</CardText>
                <Row style={{
                    display: "flex",
                    fontSize:"20px"
                  }}>
                  <Col sm="3" style={{alignItems:"center"}}><img src="a1.png" alt="" style={{width:"20%"}}/>{data.duration} months</Col>
                  <Col sm="3" style={{alignItems:"center"}}><img src="a3.png" alt="" style={{width:"20%"}}/>{data.totalSlots} students</Col>
                  <Col sm="3" style={{alignItems:"center"}}><img src="a2.png" alt="" style={{width:"20%"}}/>INR {data.stipend}</Col>
                  <Col sm="3" style={{background:"#E67B5D", padding:"0", margin:"0"}}>
                    <center>
                    <Link to ={"/Projects/Details/" + data["project-uid"]}><Button style={{
                        backgroundColor: "#E67B5D",
                        border:"#E67B5D",
                        color: "white"
                      }}>Details</Button></Link>
                      </center>

                  </Col>
                </Row>
              </CardBody>
            </Col>
          </Row>
        </Card>);
      })
    }
    </div>);
};

function ProfProjects() {
    const Name = localStorage.getItem('currentUserName');
    return (<div className="App">
      <Navbar />
      <div style={{
          padding: "3%"
        }}>
        <h1 style={{
            textAlign: "left", fontWeight:"700"
          }}> Active Projects</h1>
        <p style={{
            textAlign: "left", color:"#000000"
          }}>Want to <Link to={"/Add"}>add a new project?.</Link></p>
      </div>
      <CardComponent/>
      <CarouselComponent/>
      <br/>
      <FooterComponent/>
    </div>);
  }
  
  export default ProfProjects;
  

