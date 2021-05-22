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
import {Link, withRouter} from "react-router-dom";
import { APIlink } from "../../Helper";
import Header from '../Header/Header';
import { Translate } from 'aws-sdk';

const ProjectDetail = (props) => {

  const [project, setproject] = useState("");
  const [ loading, setLoading ] = useState(true);
  const credentials = localStorage.getItem('currentUser');
  
  console.log("props", props.match.params.project_uid);

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
        response = await fetch (`${APIlink}/projects/`+ props.match.params.project_uid, requestOptions)
    } catch (err) {
        return;
    }finally{
        setLoading(false);
       }
    const result = await response.json();
    setproject(result);
  }
  console.warn("props", props);
  console.log(project);
  

  useEffect(() => {
    getProjects();
  }, []);

  if(loading)
    return <div>Fetching Data ...</div>

  return (<div>
      <Header />
      <img src={logo} style = {{position: 'absolute', left: '50%', top: '5%',
                transform: 'translate(-50%, 0)', margin:"4rem", width:"100vh"}}/>
        <h1>Project Title</h1>
    <div><Row style = {{display: "flex"}}><Col xs="6">{project?.Item?.profName || ''}</Col>
                 <Col xs="6">{project?.Item?.dept || ''}</Col>
    </Row>
    <Row style = {{display: "flex"}}><Col xs="6">{project?.Item?.duration || ''} months</Col>
                 <Col xs="6">INR {project?.Item?.stipend || ''}</Col>
    </Row>
    <Row style = {{displey: "flex"}}><Col xs="6">{project?.Item?.totalSlots || ''}</Col>
                 <Col xs="6">Start Date</Col>
    </Row>
    </div>
    <h1>description</h1>
    {project?.Item?.description || ''}
    <br></br>
    <h1>responsibilities</h1>
    {project?.Item?.responsibilities || ''}
    <br></br>
    <h1>Prerequisites</h1>
    {project?.Item?.preReq || ''}
    <h1>additional details</h1>
    {project?.Item?.addDetails || ''}
    <Link to ={"/Projects/Apply/"+ project?.Item?.["project-uid"] || ''}><Button style={{
                        backgroundColor: "#0F8797",
                        color: "white"
                      }}>Apply</Button></Link>


  </div>);
};

export default withRouter(ProjectDetail);
