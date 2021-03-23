import React, {Component} from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import homepageURL from '../../components/Assets/homepicture.svg';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'



class Home extends Component{
 

  

  render(){
    return (
    <div className="home">
    <Header/>
      <div className="container">
        <div className="row">
            <div className="column first">
                <h1>Interested in Research?</h1>
                
                <p><span> Apply for projects from across IITs</span></p> 

                <div className="input-group">
                  <select className="custom-select" id="inputGroupSelect04">
                    <option selected>Choose...</option>
                    <option value="1">IIT Kharagpur</option>
                    <option value="2">IIT Bombay</option>
                    <option value="3">IIT Kanpur</option>
                    <option value="4">IIT Madras</option>
                    <option value="5">IIT Roorkee</option>
                  </select>
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">find projects</button>
                  </div>
                </div>
                               
            </div>
            <div className="column second">   
                
                
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}}
  
  export default Home;