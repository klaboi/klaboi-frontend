import React, {Component} from "react";
import '../../pages/Project/Project.css';
import Navbar from '../Navbar';
import CardComponent from './cardComponent';
import CarouselComponent from './carouselComponent';
import FooterComponent from './footerComponent';


function example() {
  const Name = localStorage.getItem('currentUserName');
  return (<div className="App">
    <Navbar/>
    <div style={{
        padding: "3%"
      }}>
      <h2 style={{
          textAlign: "left"
        }}>Hi {Name}!</h2>
      <p style={{
          textAlign: "left"
        }}>These are the projects that are open to you.</p>
    </div>
    <CardComponent/>
    <CarouselComponent/>
    <br/>
    <FooterComponent/>
  </div>);
}

export default example;
