import logo from '../Assets/logo.svg';
import React, {Component} from "react";
import '../../pages/Project/Project.css';
import HeaderComponent from './headerComponent';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import CardComponent from './cardComponent';
import CarouselComponent from './carouselComponent';
import FooterComponent from './footerComponent';
import axios from 'axios';
import {HashRouter, Route, Link, Switch} from "react-router-dom";


function example() {
  const Name = localStorage.getItem('currentUserName');
  return (<div className="App">
    <Header/>
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
    {/* <br/>
    <CardComponent/>
    <br/>
    <CardComponent/>
    <br/> */}
    <CarouselComponent/>
    <br/>
    <FooterComponent/>
  </div>);
}

export default example;
