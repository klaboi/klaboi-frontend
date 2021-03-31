import React, {Component} from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.scss'
import {Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            rollno: "",
            fullname:"",
            phoneno:""

        }
    }

    handleSubmit = async event => {
        //console.log(this.state.username)
        event.preventDefault()
    }

    onInputChange = event => {
        this.setState({
            [event.target.id]:event.target.value
        },()=>{
            console.log(this.state);
        })
        
    }



    
    

    render() {
        return (
            <div>
                <Header />
            <div className="register row justify-content-center align-items-center">

             <div className = "w-50 p-3">
                <h1>Sign up<span>as a Student</span></h1>
                <Link to="/LogIn">or login to your account</Link>
                <br></br>
                <br></br>
                <form >
                <div className="input-group mb-3">
                <input type="text" id="email"   
                value={this.state.email}
                onChange={this.onInputChange} 
                className="form-control form-control-lg" placeholder=" institute email" aria-label="institute-email" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" id="password"
                value={this.state.password}
                onChange={this.onInputChange} 
                className="form-control form-control-lg" placeholder="password" aria-label="password" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" id="rollno"
                value={this.state.rollno}
                onChange={this.onInputChange}
                className="form-control form-control-lg" placeholder="roll number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" id="fullname"
                 value={this.state.fullname}
                 onChange={this.onInputChange}
                 className="form-control form-control-lg" placeholder="full name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>    
                </div>

                <div className="input-group mb-3">
                <input type="text" id="phoneno"
                 value={this.state.phoneno}
                 onChange={this.onInputChange}
                 className="form-control form-control-lg" placeholder="phone number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>

                
                <Button id = "register-btn" type = "submit" onSubmit={this.handleSubmit} variant="primary" size="lg" block>
                    continue
                </Button>
               
                </form>
                </div>
                
                
                

            </div>
            </div>
        )
    }
}

export default Register;