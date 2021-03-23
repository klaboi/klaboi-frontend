import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.scss'
import {Button} from 'react-bootstrap';

class LogIn extends Component {
    render() {
        return (
            <div className="login row justify-content-center align-items-center">
                <h1>Login</h1>
                <a href = './Login.js'>or create a new account </a>
                
                <div className = "w-50 p-3">
                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder=" Institute email" aria-label="Institute email" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2"/>
                </div>

                

                
                <Button variant="primary" size="lg" block>
                    continue
                </Button>

                </div>

            </div>
        )
    }
}

export default LogIn;