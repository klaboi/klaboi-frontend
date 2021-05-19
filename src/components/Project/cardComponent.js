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
import logo from '../Assets/logo.svg';
import {Container, Row, Col} from 'reactstrap';
import axios from 'axios';
import {useState} from "react";

const Example = (props) => {

  const [projects, setProjects] = useState(null);

  (async () => {
    const response = await axios.get('https://payztzwv2m.execute-api.ap-south-1.amazonaws.com/projects');
    console.log(response.data);
    setProjects(response.data);
  })();

  return (<div style={{
      padding: "0% 3% 3% 3%"
    }}>
    {
      projects && projects.Items.map((project, index) => {
        return (<Card style={{
            textAlign: "left"
          }}>
          <Row style={{
              display: "flex"
            }}>
            <Col xs="3">
              <CardImg top="top" width="auto" src={logo} alt="Card image cap"/>
            </Col>
            <Col xs="9">
              <CardBody>
                <CardTitle tag="h5">Project title: {project.price}</CardTitle>
                <p>Professor: {project.name}</p>
                <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen project.</CardText>
                <Row style={{
                    display: "flex"
                  }}>
                  <Col xs="3">4 Months</Col>
                  <Col xs="3">4 Students</Col>
                  <Col xs="3">???</Col>
                  <Col xs="3">
                    <Button style={{
                        backgroundColor: "#0F8797",
                        color: "white"
                      }}>Apply</Button>
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

export default Example;
