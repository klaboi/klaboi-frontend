import React from 'react';
import {
  Button
} from 'reactstrap';
import logo from '../Assets/kgp.svg';
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import {useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import { APIlink } from "../../Helper";
import Navbar from '../Navbar';
import { Translate } from 'aws-sdk';
import Footer from './footerComponent';
import Carousel from '../Project/carouselComponent'

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

  return (
    <div style={{height:"auto"}}>
    <Navbar style={{width:"100%", margin:"0"}}/>
        
        {/* <div >
          <img src="https://socialmediacollege.com/wp-content/uploads/5-Creative-Ways-to-Use-Facebooks-Carousel-Ads.png" alt="" style={{maxWidth:"100%", padding:"5%", backgroundSize:"cover", backgroundPosition:"cover"}}/>
        </div> */}
        <div className="container" style={{padding: "1rem", marginTop:"1rem"}}>
        <div>
            <h2>Project Title</h2>
            <Row style = {{display: "flex"}}><Col sm="3">{project?.Item?.profName || ''}</Col>
                 <Col sm="3">{project?.Item?.dept || ''}</Col>
            </Row>             
        </div>
        <br/>
        <div style={{fontWeight:"bold"}}>
          <Row style = {{display: "flex", alignContent:"center"}}><Col sm="3" style={{alignItems:"center"}}><img src="a1.png" alt="" style={{width:"20%"}}/>{project?.Item?.duration || ''} Months</Col>
                 <Col sm="3" style={{alignItems:"center"}}><img src="a2.png" alt="" style={{width:"20%"}}/>{project?.Item?.stipend || ''}</Col>
          </Row>
          <Row style = {{displey: "flex", alignContent:"center"}}><Col sm="3" style={{alignItems:"center"}}><img src="a3.png" alt="" style={{width:"20%"}}/>{project?.Item?.totalSlots || ''}</Col>
                 <Col sm="3" style={{alignItems:"center"}}><img src="a4.png" alt="" style={{width:"20%"}}/>31st January</Col>
          </Row>
        </div>
        <br/><br/>
        <h4>Statement of Purpose</h4>
        <br/>
        

        <br/>
        <br/><br/>
      </div>
      <br></br>
      <center>
      <Link to ={"/Projects/Apply/"+ project?.Item?.["project-uid"] || ''}>
       <Button style={{
                        backgroundColor: "#0F8797",
                        color: "white",
                        width: "20%",
                        textAlign:"center"
                      }}>Apply
       </Button></Link>
      </center>
      <Carousel/>
      <br/><br/>
      <Footer/>
    </div>
  );
};

export default withRouter(ProjectDetail);