import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import logo from '../Assets/kgp.svg';
const Example = (props) => {
  return (
    <div style={{padding:"3%"}}>
    <h2 style={{textAlign:"left"}}>Some reads for you</h2>
    <p style={{textAlign:"left"}}>Learn more about research in the other IITs</p>
    <CardGroup style={{padding:"3%"}}>
      <Card style={{margin:"0 1%", border:"none"}}>
        <CardImg top width="10%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h6">Flying high with the best drone tech : The inspiring tale of Urban Matrix</CardTitle>
        </CardBody>
      </Card>
      <Card style={{margin:"0 1%", border:"none"}}>
        <CardImg top width="10%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h6">Dioxane: A Harmful Pollutant and the Search for its Sensor</CardTitle>
        </CardBody>
      </Card>
      <Card style={{margin:"0 1%", border:"none"}}>
        <CardImg top width="10%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h6">Breaking a Virus 2: COVIRAP and where it goes from here</CardTitle>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
  );
};

export default Example;