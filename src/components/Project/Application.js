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
import { Container, Row, Col } from 'reactstrap';

const Application = () => {
  const Name = localStorage.getItem('currentUserName');
  return (
    <div className="App">
     <h1>Hello</h1>
    </div>
  );
}

export default Application;
