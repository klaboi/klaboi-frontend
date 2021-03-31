import React, {Component} from 'react';
import FooterComponent from './footerComponent';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class Application extends Component {

  constructor() {
      super();

      this.state = {
          description: '',
          responsibilties: '',
          duration: '',
          stipend:'',
          numberStudents:'',
          deadline:'',
          tags:'',
          addDetails:''
      };
  }

  handleSubmit = async event => {
      console.log(this.state.description)
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
      <h1>Project Title Here</h1>  
    <div className="register row justify-content-center align-items-center">
       
                     
        <div className = "w-50 p-3">

        <br></br>
        <br></br>
        <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
        <input type="text"  
        value={this.state.description}
        onChange={this.onInputChange} 
        className="form-control form-control-lg" id="inputlg" placeholder="description" aria-label="description" aria-describedby="basic-addon2"/>
        </div>

        <div className="input-group mb-3">

        <input type="text" id="responsibilities"
        value={this.state.responsibilties}
        onChange={this.onInputChange} 
        className="form-control form-control-lg" placeholder="student's responsibilities"  aria-describedby="basic-addon2"/>
        </div>

        <div className="input-group mb-3">
        <input type="text" 
        value={this.state.duration}
        onChange={this.onInputChange} 
        className="form-control form-control-lg" placeholder="duration(in months)" aria-label="Recipient's username" aria-describedby="basic-addon2"
        />
        </div>

        <div className="input-group mb-3">
        <input type="text" 
        value={this.state.stipend}
        onChange={this.onInputChange} 
        className="form-control form-control-lg" placeholder="stipend(per month)" aria-label="Recipient's username" aria-describedby="basic-addon2"/>    
        </div>

        <div className="input-group mb-3">
        <input type="text" 
        value={this.state.numberStudents}
        onChange={this.onInputChange} 
        className="form-control form-control-lg" placeholder="no. of students required" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        </div>

        <div className="input-group mb-3">
        <input type="text" 
        value={this.state.deadline}
        onChange={this.onInputChange} 
        className="form-control form-control-lg" placeholder="deadline to apply" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        </div>

        <div className="input-group mb-3">
        <input type="text" 
        value={this.state.tags}
        onChange={this.onInputChange} 
        className="form-control form-control-lg" placeholder="tags" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        </div>

        <div className="input-group mb-3">
        <input type="text" 
        value={this.state.addDetails}
        onChange={this.onInputChange} 
        className="form-control form-control-lg" placeholder="additional details" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        </div>

        <Button type = "submit" onSubmit={this.handleSubmit} variant="primary" size="lg" block>
            continue
        </Button>
        <Button style={{margin:'5px', backgroundColor:"#0F8797", color:"white"}}>Save</Button>
        <Button style={{margin:'5px', backgroundColor:"#0F8797", color:"white"}}>Post</Button>
        </form>
        </div>




        </div>
            </div>
          );
        }
        }

export default Application;