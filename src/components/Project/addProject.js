import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory, useState } from "react-router-dom";
import styled from "styled-components";
// import './Project.scss';
import {Button} from 'react-bootstrap';
import Navbar from '../Navbar';


const Submit = styled(Button)`
  width: 200px;
  cursor: ${(props) =>
    props.loginstate == "empty"
      ? "default"
      : props.loginstate == "filled"
      ? "pointer"
      : ""};
  background-color: ${(props) =>
    props.loginstate == "empty"
      ? "#cacaca"
      : props.loginstate == "filled"
      ? "#0F8797"
      : ""};
  &:hover {
    background-color: ${(props) =>
      props.loginstate == "empty"
        ? "#cacaca"
        : props.loginstate == "filled"
        ? "#0F8797"
        : ""};
  }
`;

function AddProject() {
    const credentials = localStorage.getItem('currentUser');

    const [description, setdescription] = React.useState("");
    const [responsibilities, setresponsibilities] = React.useState("");
    const [profName, setprofName] = React.useState("");
    const [dept, setdept] = React.useState("");
    const [addDetails, setaddDetails] = React.useState("");
    //const [tags, settags] = React.useState("");
    //will add tags functionality later
    const [totalSlots, settotalSlots] = React.useState("");
    const [duration, setduration] = React.useState("");
    const [stipend, setstipend] = React.useState("");
    const [preReq, setpreReq] = React.useState("");
    const [err, setErr] = React.useState(null);
    const [descriptionErr, setdescriptionErr] = React.useState({});
    const [stipendErr, setstipendErr] = React.useState({});
    const [loginstate, setloginstate] = React.useState("empty");


    const history = useHistory();

    const handleSubmit = async (event, description, responsibilities, profName, stipend, dept, addDetails, totalSlots, duration, preReq) => {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.set('Authorization', 'Basic ' + credentials);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        description: description,
        responsibilities: responsibilities,
        profName: profName,
        stipend: stipend,
        dept: dept,
        addDetails: addDetails,
        totalSlots: totalSlots,
        duration: duration,
        preReq: preReq
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        let response;

        try {
            response = await fetch (process.env.REACT_APP_API_ENDPOINT +"/projects", requestOptions)
        } catch (err) {
            setErr("Incorrect Password. Please Retry.");
            return;
        }
        const result = await response.text();
        //console.log(result);
        const json = JSON.parse(result);
        //console.log(json);
        //console.log(response);
        

        if (response.status===200) {
            setErr(null);
            history.push("/Demo1");
            } else {
            setErr(json.error);
            console.log(json.error);
            }
          

        };


        return (
            <div>
                <Navbar />
            <div className="register row justify-content-center align-items-center">

             <div className = "w-50 p-3">
                <h1>Project Title</h1>
                <br></br>
                <br></br>
                <form>
                
                <div className="input-group mb-3">
                <input type="text" id="profName"
                value={profName}
                onChange={(event) => {
                    setprofName(event.target.value);
                    setErr("");
                    if (event.target.value != "" &&  responsibilities != "" && description != "" && stipend != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="professor's name" aria-label="profName" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" id="profName"
                value={dept}
                onChange={(event) => {
                    setdept(event.target.value);
                    setErr("");
                    if (event.target.value != "" &&  responsibilities != "" && description != "" && stipend != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="department" aria-label="profName" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3" >
                <input type="text" id="description" 
                style={{height:"150px"}}  
                value={description}
                onChange= {(event) => {
                    setErr("");
                    setdescription(event.target.value); 
                    if (event.target.value != ""  && responsibilities != "" && profName != "" && stipend != "") {
                      setloginstate("filled");
                    }}}
                className="form-control form-control-lg" placeholder=" description" aria-label="institute-description" aria-describedby="basic-addon2"/>
                </div>
                
            

                <div className="input-group mb-3">
                <input type="text" id="responsibilities"
                style={{height:"75px"}} 
                value={responsibilities}
                onChange={(event) => {
                    setresponsibilities(event.target.value);
                    setErr("");
                    if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="responsibilties" aria-label="responsibilities" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" id="responsibilities"
                style={{height:"75px"}}
                value={preReq}
                onChange={(event) => {
                    setpreReq(event.target.value);
                    setErr("");
                    if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="prerequisites" aria-label="responsibilities" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="number" id="stipend"
                value={duration}
                onChange={(event) => {
                    setduration(event.target.value);
                    setErr("");
                    if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="duration (in months)" aria-label="stipend" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="number" id="stipend"
                value={stipend}
                onChange={(event) => {
                    setstipend(event.target.value);
                    setErr("");
                    if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="stipend (per month)" aria-label="stipend" aria-describedby="basic-addon2"/>
                </div>
        
                <div className="input-group mb-3">
                <input type="number" id="stipend"
                value={totalSlots}
                onChange={(event) => {
                    settotalSlots(event.target.value);
                    setErr("");
                    if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="# of students required" aria-label="stipend" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" id="responsibilities"
                style={{height:"75px"}} 
                value={addDetails}
                onChange={(event) => {
                    setaddDetails(event.target.value);
                    setErr("");
                    if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="additional details" aria-label="responsibilities" aria-describedby="basic-addon2"/>
                </div>

                

               

                
                <Submit
                loginstate={loginstate}
                onClick={(event) => {
                  event.preventDefault();
                  if (description != "" &&  responsibilities != "" && profName != "" && stipend != "") {
                    handleSubmit(event, description, responsibilities, profName, stipend, dept, addDetails, totalSlots, duration, preReq);
                  } else {
                    setErr("Fields can't be left empty");
                  }
                }}
              >
                {" "}
                Post
              </Submit>
               
                </form>
                </div>
                
                
                

            </div>
            </div>
        )
    }


export default AddProject;