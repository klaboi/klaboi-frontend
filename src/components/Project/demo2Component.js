import React, { Component } from "react";
import Footer from '../Footer'
import CardComponent from './cardComponent';

function example() {
  return (
    <div className="App">
      <div style={{padding:"3%"}}>
          <h2 style={{textAlign:"left"}}>Active Projects</h2>
          <p style={{textAlign:"left"}}>Want to <a href="">add a new project?</a></p>
      </div>
        <CardComponent/>
        <br/>
        <CardComponent/>
        <br/>
        <CardComponent/>
        <div style={{padding:"3%"}}>
          <h2 style={{textAlign:"left"}}>Drafts</h2>
      </div>
      <CardComponent/>
      <div style={{padding:"3%"}}>
          <h2 style={{textAlign:"left"}}>Completed Projects</h2>
      </div>
      <CardComponent/>
      <br/>
        <Footer/>
    </div>
  );
}

export default example;