import React from 'react';
import './App.css';
import Home from './pages/Home/Home'
import Register from './pages/Auth/Register'
import LogIn from './pages/Auth/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './pages/Project/Project';
import ProjectComponent from './components/Project/projectComponent';
import Project2Component from './components/Project/project2Component';
import { HashRouter, Route, Link, Switch } from "react-router-dom";

function App() {


    return (
      <div >
        <HashRouter basename ='/'>
        <Switch>
          <Route path="/" component = {Home} exact/>
          <Route path="/Login" component = {LogIn}/>
          <Route path="/Register" component = {Register}/>
          <Route path="/Projects" component = {ProjectComponent} />
          <Route path="/Application" component = {Project2Component} />
        </Switch>
        </HashRouter>
    </div>
    )
  }

export default App
