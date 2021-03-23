import React, {Component} from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.scss'
import {Button} from 'react-bootstrap';


class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        console.log(this.state.username)
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
            <div className="register row justify-content-center align-items-center">
                <Header />
                <div className = "row justify-content-center align-items-center">
                <h1>Sign Up<span>as a Professor</span></h1>
                <a href = './Login.js'>or login into your account</a>
                
                <div className = "w-50 p-3">
                <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                <input type="text" id="email"   
                value={this.state.email}
                onChange={this.onInputChange} 
                className="form-control" placeholder=" Institute email" aria-label="Institute email" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                
                <input type="text" id="password"
                value={this.state.password}
                onChange={this.onInputChange} 
                className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>    
                </div>

                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>

                
                <Button type = "submit" onSubmit={this.handleSubmit} variant="primary" size="lg" block>
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