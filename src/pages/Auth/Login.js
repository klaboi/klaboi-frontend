import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.scss'
import {Button} from 'react-bootstrap';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Header from '../../components/Header/Header'
class LogIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        console.log("email:", (this.state.email), "password:", (this.state.password))
        event.preventDefault();
        //event.target.reset();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        fetch('https://payztzwv2m.execute-api.ap-south-1.amazonaws.com/users', {
            method: 'GET',
            headers: {
                'Accept' :'application/json',
                'Content-Type': 'application/json'
            },
            
            //body: JSON.stringify(data)
    
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if(result.statusCode == '404')
                    alert('Invalid');
                else
                    this.props.history.push("/Register");
            })
    }

    onInputChange = event => {
        this.setState({
            [event.target.id]:event.target.value
        },()=>{
           // console.log(this.state);
        })
        
    }



    
    

    render() {
        return (
            <div>
                <Header />
            <div className="register row justify-content-center align-items-center">

             <div className = "w-50 p-3">
                <h1>Log in</h1>
                <Link to="/Register">or create a new account</Link>
                <br></br>
                <br></br>
                <form onSubmit={this.handleSubmit}>
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

export default LogIn;