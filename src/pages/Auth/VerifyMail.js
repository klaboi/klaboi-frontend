import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import './Register.scss'
import verify from '../../components/Assets/verifypic.svg';
import Header from '../../components/Header/Header';

function VerifyMail() {
    return (
        <div>
            <Header/>
            <div style={{position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'}}>
            <img src = {verify}/>
            <h1 style = {{marginTop:"2rem", fontSize: "40px"}}>Verify Your Email</h1>
            <div style={{textAlign:"center", marginTop:"2rem"}}>
              Your password has been sent to your email. <br></br>
              <Link to ="/Login" style ={{color: "#0F8797", textDecoration:"underline" }}> Log in  </Link> 
              with your new password. 
              </div> 
              </div>
            
        </div>
    )
}

export default VerifyMail;