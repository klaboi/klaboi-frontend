import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import logo from '../Assets/logo.svg';
import { Container, Row, Col } from 'reactstrap';
const Example = (props) => {
  return (
    <div style={{padding:"0% 3% 3% 3%"}}>
      <Card style={{textAlign:"left"}}>
        <Row style={{display:"flex"}}>
            <Col xs="3">
            <CardImg top width="auto" src={logo} alt="Card image cap" />
            </Col>
            <Col xs="9">
            <CardBody>
            <CardTitle tag="h5">Project title</CardTitle>
            <p>Prof. Richard Feyman | Department of Physics</p>
            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardText>
           
            <Row style={{display:"flex"}}>
                <Col xs="3">4 Months</Col>
                <Col xs="3">4 Students</Col>
                <Col xs="3">???</Col>
                <Col xs="3"> <Button style={{backgroundColor:"#0F8797", color:"white"}}>Apply</Button></Col>
            </Row>
            </CardBody>
            </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Example;