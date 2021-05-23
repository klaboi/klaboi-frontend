import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import logo from '../Assets/kgp.svg';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Example = (props) => {
  return (
    <div style={{padding:"6% 10%"}}>
    <h1 style={{textAlign:"left"}}>Some reads for you</h1>
    <p style={{textAlign:"left"}}>Learn more about research in the other IITs</p>
    <Carousel responsive={responsive}>
      <div><Card style={{margin:"0% 1%", border:"none"}}>
        <CardImg top width="10%" src={logo} alt="Card image cap" style={{margin:"0%"}}/>
        <CardBody>
          <CardTitle tag="h6">Flying high with the best drone tech : The inspiring tale of Urban Matrix</CardTitle>
        </CardBody>
      </Card></div>
      <div><Card style={{margin:"0 1%", border:"none"}}>
        <CardImg top width="10%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h6">Dioxane: A Harmful Pollutant and the Search for its Sensor</CardTitle>
        </CardBody>
      </Card></div>
      <div> <Card style={{margin:"0 1%", border:"none"}}>
        <CardImg top width="10%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h6">Breaking a Virus 2: COVIRAP and where it goes from here</CardTitle>
        </CardBody>
      </Card></div>
      <div><Card style={{margin:"0 1%", border:"none"}}>
        <CardImg top width="10%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h6">Flying high with the best drone tech : The inspiring tale of Urban Matrix</CardTitle>
        </CardBody>
      </Card></div>
    </Carousel>
    
    </div>
  );
};

export default Example;