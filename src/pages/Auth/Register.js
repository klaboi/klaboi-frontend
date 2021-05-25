import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import './Register.scss'
import {Button} from 'react-bootstrap';
import { APIlink } from "../../Helper";
import Header from '../../components/Header/Header';
import AuthRequired from './AuthRequired';
import { FormGroup, Label, Input, Message, Submit } from '../../components/common';
import Media from 'react-media';

// const Submit = styled(Button)`
//   width: 200px;
//   cursor: ${(props) =>
//     props.loginstate == "empty"
//       ? "default"
//       : props.loginstate == "filled"
//       ? "pointer"
//       : ""};
//   background-color: ${(props) =>
//     props.loginstate == "empty"
//       ? "#cacaca"
//       : props.loginstate == "filled"
//       ? "#0F8797"
//       : ""};
//   &:hover {
//     background-color: ${(props) =>
//       props.loginstate == "empty"
//         ? "#cacaca"
//         : props.loginstate == "filled"
//         ? "#0F8797"
//         : ""};
//   }
// `;

function Register() {

    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [rollno, setRollno] = React.useState("");
    const [name, setName] = React.useState("");
    const [phoneno, setPhoneno] = React.useState("");
    const [err, setErr] = React.useState(null);
    const [emailErr, setEmailErr] = React.useState({});
    const [phonenoErr, setPhonenoErr] = React.useState({});
    const [loginstate, setloginstate] = React.useState("empty");


    const history = useHistory();

    const handleSubmit = async (event, email, rollno, name, phoneno) => {
        event.preventDefault();

        const isValid = formValidation();

        if(isValid) {
        var myHeaders = new Headers();
        //myHeaders.append("Authorization", "Basic abc:test");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        email: email,
        rollno: rollno,
        name: name,
        phoneno: phoneno,
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        let response;

        try {
            response = await fetch (`${APIlink}/users`, requestOptions)
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
            localStorage.setItem('isAuthenticated', true);
            //context.updateToken(JSON.stringify(json.data));
            history.push("/Verify");
            localStorage.setItem('currentUserName', JSON.stringify(json.name));
            } else {
            setErr(json.error);
            console.log(json.error);
            }
          }

        };

    const formValidation = () => {
      const emailErr = {};
      const phonenoErr = {};
      let isValid = true;
      var regex = /\S+@iitkgp\.ac\.in$/;
      var result = regex.test(email);
      if(result == true){
          isValid = true;
      }
      else{
        emailErr.wrongFormat = "Incorrect format";
        isValid = false;
      }
      if(phoneno.trim().length > 10) {
        phonenoErr.phonenoShort = "Phone number must have 10 digits.";
        isValid = false;
      }

      setEmailErr(emailErr);
      setPhonenoErr(phonenoErr);
      return isValid;
    }

        return (
            <div>
                <Header />
            <div className="register row justify-content-center align-items-center">

             {/* <div className = "w-50 p-3">
                <h1>Sign up</h1>
                <Link to="/Login">or login to your account</Link>
                <br></br>
                <br></br>
                <form>
                <div className="input-group mb-3">
                <input type="text" id="email"
                value={email}
                onChange= {(event) => {
                    setErr("");
                    setEmail(event.target.value);
                    if (event.target.value != ""  && rollno != "" && name != "" && phoneno != "") {
                      setloginstate("filled");
                    }}}
                className="form-control form-control-lg" placeholder=" institute email" aria-label="institute-email" aria-describedby="basic-addon2"/>
                </div>
                {Object.keys(emailErr).map((key)=>{
                  return <div style={{color:"red"}}>{emailErr[key]}</div>
                })}



                <div className="input-group mb-3">
                <input type="text" id="password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                    setErr("");
                    if (event.target.value != "" && email != "" && rollno != "" && name != "" && phoneno != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="password" aria-label="password" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" id="rollno"
                value={rollno}
                onChange={(event) => {
                    setRollno(event.target.value);
                    setErr("");
                    if (event.target.value != "" && email != "" && name != "" && phoneno != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="roll number" aria-label="rollno" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" id="name"
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                    setErr("");
                    if (event.target.value != "" &&  rollno != "" && email != "" && phoneno != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="full name" aria-label="name" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="number" id="phoneno"
                value={phoneno}
                onChange={(event) => {
                    setPhoneno(event.target.value);
                    setErr("");
                    if (event.target.value != "" &&  rollno != "" && name != "" && email != "") {
                      setloginstate("filled");
                    }
                }}
                className="form-control form-control-lg" placeholder="phone number" aria-label="phoneno" aria-describedby="basic-addon2"/>
                </div>
                {Object.keys(phonenoErr).map((key)=>{
                  return <div style={{color:"red"}}>{phonenoErr[key]}</div>
                })}




                <Submit
                loginstate={loginstate}
                onClick={(event) => {
                  event.preventDefault();
                  if (email != "" &&  rollno != "" && name != "" && phoneno != "") {
                    handleSubmit(event, email, rollno, name, phoneno);
                  } else {
                    setErr("Fields can't be left empty");
                  }
                }}
              >
                {" "}
                Sign up
              </Submit>

                </form>
                </div> */}
                <Media query={{ maxWidth: 795 }}>
          {matches =>
            matches ? (
              <div style={{width: '75%'}}>
                 <h1>Sign up<span>as a Student</span> </h1>or
                 <Link to="/Login"> login to your account</Link>
                 <br></br>
                 <br></br>
                 <form>

                 <FormGroup>
                   {/* <Label htmlFor="label">Label</Label> */}
                   <Input id="email" placeholder="Institute email" value={email}
                   onChange= {(event) => {
                       setErr("");
                       setEmail(event.target.value); }} aria-label="institute-email" aria-describedby="basic-addon2"/>
                   {/* <Message>This is the validation message</Message> */}
                 </FormGroup>
                 <FormGroup>
                   {/* <Label htmlFor="label">Label</Label> */}
                   <Input placeholder="password" type="password" id="password"
                   value={password}
                   onChange={(event) => {
                       setPassword(event.target.value);
                       setErr("");
                   }} aria-label="password" aria-describedby="basic-addon2"/>
                   {/* <Message>This is the validation message</Message> */}
                 </FormGroup>
                 <FormGroup>
                   {/* <Label htmlFor="label">Label</Label> */}
                   <Input placeholder="roll number" id="rollno"
                   value={rollno}
                   onChange={(event) => {
                       setRollno(event.target.value);
                       setErr("");
                   }} aria-label="rollno" aria-describedby="basic-addon2"/>
                   {/* <Message>This is the validation message</Message> */}
                 </FormGroup>
                 <FormGroup>
                   {/* <Label htmlFor="label">Label</Label> */}
                   <Input placeholder="full name" id="name"
                   value={name}
                   onChange={(event) => {
                       setName(event.target.value);
                       setErr("");
                   }} aria-label="name" aria-describedby="basic-addon2"/>
                   {/* <Message>This is the validation message</Message> */}
                 </FormGroup>
                 <FormGroup>
                   {/* <Label htmlFor="label">Label</Label> */}
                   <Input placeholder="phone number" id="phoneno"
                   value={phoneno}
                   onChange={(event) => {
                       setPhoneno(event.target.value);
                       setErr("");
                   }} aria-label="phoneno" aria-describedby="basic-addon2"/>
                   {/* <Message>This is the validation message</Message> */}
                 </FormGroup>


                 <Submit
                 //loginState={loginState}
                 onClick={(event) => {
                   event.preventDefault();
                   if (email !== "" && password !== "" && rollno !== "" && name !== "" && phoneno !== "") {
                     handleSubmit(event, password, email, rollno, name, phoneno);
                   } else {
                     setErr("Fields can't be left empty");
                   }
                 }}
               >
                 {" "}
                 <b>continue</b>
               </Submit>

                 </form>
                 </div>
            ) : (
              <div style={{width: '50%'}}>
                 <h1>Sign up<span>as a Student</span> </h1>or
                 <Link to="/Login"> login to your account</Link>
                 <br></br>
                 <br></br>
                 <form>

                 <FormGroup>
                   {/* <Label htmlFor="label">Label</Label> */}
                   <Input id="email" placeholder="Institute email" value={email}
                   onChange= {(event) => {
                       setErr("");
                       setEmail(event.target.value); }} aria-label="institute-email" aria-describedby="basic-addon2"/>
                   {/* <Message>This is the validation message</Message> */}
                 </FormGroup>
                 <FormGroup>
                   {/* <Label htmlFor="label">Label</Label> */}
                   <Input placeholder="password" type="password" id="password"
                   value={password}
                   onChange={(event) => {
                       setPassword(event.target.value);
                       setErr("");
                   }} aria-label="password" aria-describedby="basic-addon2"/>
                   {/* <Message>This is the validation message</Message> */}
                 </FormGroup>
                 <FormGroup>
                   {/* <Label htmlFor="label">Label</Label> */}
                   <Input placeholder="roll number" id="rollno"
                   value={rollno}
                   onChange={(event) => {
                       setRollno(event.target.value);
                       setErr("");
                   }} aria-label="rollno" aria-describedby="basic-addon2"/>
                   {/* <Message>This is the validation message</Message> */}
                 </FormGroup>
                 <FormGroup>
                   {/* <Label htmlFor="label">Label</Label> */}
                   <Input placeholder="full name" id="name"
                   value={name}
                   onChange={(event) => {
                       setName(event.target.value);
                       setErr("");
                   }} aria-label="name" aria-describedby="basic-addon2"/>
                   {/* <Message>This is the validation message</Message> */}
                 </FormGroup>
                 <FormGroup>
                   {/* <Label htmlFor="label">Label</Label> */}
                   <Input placeholder="phone number" id="phoneno"
                   value={phoneno}
                   onChange={(event) => {
                       setPhoneno(event.target.value);
                       setErr("");
                   }} aria-label="phoneno" aria-describedby="basic-addon2"/>
                   {/* <Message>This is the validation message</Message> */}
                 </FormGroup>


                 <Submit
                 //loginState={loginState}
                 onClick={(event) => {
                   event.preventDefault();
                   if (email != "" && password != "" && rollno != "" && name != "" && phoneno != "") {
                     handleSubmit(event, password, email, rollno, name, phoneno);
                   } else {
                     setErr("Fields can't be left empty");
                   }
                 }}
               >
                 {" "}
                 <b>continue</b>
               </Submit>

                 </form>
                 </div>
            )
          }
        </Media>


            </div>
            </div>
        )
    }


export default Register;
