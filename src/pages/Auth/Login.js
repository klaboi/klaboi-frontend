import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import './Register.scss'
import {Button} from 'react-bootstrap';
import { encode } from "base-64";
import { APIlink } from "../../Helper";
import Header from '../../components/Header/Header';

const Submit = styled(Button)`
  width: 200px;
  cursor: ${(props) =>
    props.loginState == "empty"
      ? "default"
      : props.loginState == "filled"
      ? "pointer"
      : ""};
  background-color: ${(props) =>
    props.loginState == "empty"
      ? "#cacaca"
      : props.loginState == "filled"
      ? "#24ca7a"
      : ""};
  &:hover {
    background-color: ${(props) =>
      props.loginState == "empty"
        ? "#cacaca"
        : props.loginState == "filled"
        ? "#05a16d"
        : ""};
  }
`;

function LogIn() {

    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [err, setErr] = React.useState(null);

    const history = useHistory();

    const handleSubmit = async (event, password, email) => {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.set('Authorization', 'Basic ' + encode(email + ":" + password));
        //localStorage.setItem('myHeaders', JSON.stringify(myHeaders));
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
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
        //console.log(JSON.stringify(myHeaders));
        

        if (response.status===200) {
            setErr(null);
            localStorage.setItem('isAuthenticated', true);
            const authdata = window.btoa(email+ ':' + password);
            localStorage.setItem('currentUser', JSON.stringify(authdata));
            history.push("/Projects/All");
            } else {
            setErr("Invalid credentials");
            console.log(err);
            }
        };

        return (
            <div>
                <Header />
            <div className="register row justify-content-center align-items-center">

             <div className = "w-50 p-3">
                <h1>Log in</h1>
                <Link to="/Register">or create a new account</Link>
                <br></br>
                <br></br>
                <form>
                <div className="input-group mb-3">
                <input type="text" id="email"   
                value={email}
                onChange= {(event) => {
                    setErr("");
                    setEmail(event.target.value); }}
                className="form-control form-control-lg" placeholder=" institute email" aria-label="institute-email" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <input type="text" id="password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                    setErr("");
                }}
                className="form-control form-control-lg" placeholder="password" aria-label="password" aria-describedby="basic-addon2"/>
                </div>

                <small
                style={{ color: "red", height: "10px", display: "inline-block" }}
                >
                {err == "incorrect password"
                    ? "Incorrect Password"
                    : err == "Username and Password can't be empty"
                    ? err
                    : ""}
                </small>

               

                
                <Submit
                //loginState={loginState}
                onClick={(event) => {
                  event.preventDefault();
                  if (email != "" && password != "") {
                    handleSubmit(event, password, email);
                  } else {
                    setErr("Username and Password can't be empty");
                  }
                }}
              >
                {" "}
                continue
              </Submit>
               
                </form>
                </div>
                
                
                

            </div>
            </div>
        )
    }


export default LogIn;