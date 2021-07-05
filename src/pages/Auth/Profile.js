import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import './Register.scss';
import {Button} from 'react-bootstrap';
import { encode } from "base-64";
import { APIlink } from "../../Helper";
import Header from '../../components/Header/Header';
import { Label } from 'reactstrap';


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

const Profile = () => {
  const credentials = localStorage.getItem('currentUser');
  

  const [data, setData] = React.useState([]);
  const [avatarURL, setAvatarURL] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [rollno, setRollno] = React.useState("");
  const [name, setName] = React.useState("");
  const [phoneno, setPhoneno] = React.useState("");
  const [bio, setBio] = React.useState("");
 

  const history = useHistory();

  const getUser = async() => {
    var myHeaders = new Headers();
    myHeaders.set('Authorization', 'Basic ' + credentials);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };
     
      let response;

      try {
          response = await fetch (`${APIlink}/users`, requestOptions)
      } catch (err) {
          console.log("Incorrect Password. Please Retry.");
          return;
      }
      const result = await response.json();
      setData(result);
  };
  
  console.log(data);
  const user_uid= data["user-uid"];
 

  const getAvatar = async() => {
    var myHeaders = new Headers();
    myHeaders.set('Authorization', 'Basic ' + credentials);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };
     
      let response;

      try {
          response = await fetch (`${APIlink}/uploads/resume/${user_uid}`, requestOptions)
      } catch (err) {
          console.log("Failed");
          return;
      }
      const result = await response.text();
      setAvatarURL(result);
      console.log(avatarURL);

  };
  

  useEffect(() => {
    getUser();
    getAvatar();
    
  }, []); //this will trigger only for the first time when the component is mounted


  const handleSubmit = async (event, password, email, rollno, name, phoneno, bio) => {
    event.preventDefault();

    
    var mynewHeaders = new Headers();
    mynewHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    email: email,
    password: password,
    rollno: rollno,
    name: name,
    phoneno: phoneno,
    bio: bio,
    });

    var requestOptions = {
    method: 'PUT',
    headers: mynewHeaders,
    body: raw,
    redirect: 'follow'
    };

    let response;

    try {
        response = await fetch (`${APIlink}/users`, requestOptions)
    } catch (err) {
        console.log("Incorrect Password. Please Retry.");
        return;
    }
    const result = await response.text();
    console.log(result);
    const json = JSON.parse(result);
    console.log(json);
    console.log(response);
    

    if (response.status===200) {
        localStorage.setItem('isAuthenticated', true);
        history.push("/Projects");
        } else {
        console.log(json.error);
        }
      

    };


  // const formValidation = () => {
  //   const emailErr = {};
  //   const phonenoErr = {};
  //   //let isValid = true;
  //   var regex = /\S+@iitkgp\.ac\.in$/;
  //   var result = regex.test(email);
  //   // if(result == true){
  //   //     isValid = true;
  //   // }
  //   // else{
  //   //   emailErr.wrongFormat = "Incorrect format";
  //   //   isValid = false;
  //   }
  //   if(phoneno.trim().length == 10) {
  //     phonenoErr.phonenoShort = "Phone number must have 10 digits.";
  //     //isValid = false;
  //   }

  //   setEmailErr(emailErr);
  //   setPhonenoErr(phonenoErr);
    //return isValid; 
    
  
    // return(
    //   <div>
    //     <Header />
    //     <input type = "text" defaultValue = {data.name} />
        
    //   </div>
    // )
        return (
            <div>
                <Header />
            <div className="register row justify-content-center align-items-center">

             <div className = "w-50 p-3">
                <h1>Profile</h1>
                {/* <img src={avatarURL}/> */}
                <img src={avatarURL.replace(/['"]+/g, '')} style={{width:"192px", height:"192px"}}/>
                <br></br>
                <form>
                

                <div className="input-group mb-3">
              
                <input type="text" id="bio" 
                value = {bio}
                onChange= {(event) => {
                  setBio(event.target.value); }}
                className="form-control form-control-lg" placeholder=" Bio" aria-label="bio" aria-describedby="basic-addon2"/>
                </div>

                <div className="input-group mb-3">
                <label>
                Institute Email
                <input type="text" id="email"   
                defaultValue={data.email}
                onChange= {(event) => {
                    setEmail(event.target.value); }}
                className="form-control form-control-lg" placeholder=" institute email" aria-label="institute-email" aria-describedby="basic-addon2"/>
                </label>
                </div>
                {/* {Object.keys(emailErr).map((key)=>{
                  return <div style={{color:"red"}}>{emailErr[key]}</div>
                })} */}

                
                <div className="input-group mb-3">
                <label>
                Password
                <input type="text" id="password"
                defaultValue={data.password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
                className="form-control form-control-lg" placeholder="password" aria-label="password" aria-describedby="basic-addon2"/>
                </label>
                </div>

                <div className="input-group mb-3">
                <label>
                Roll Number
                <input type="text" id="rollno"
                defaultValue={data.rollno}
                onChange={(event) => {
                    setRollno(event.target.value);
                }}
                className="form-control form-control-lg" placeholder="roll number" aria-label="rollno" aria-describedby="basic-addon2"/>
                </label>
                </div>

                <div className="input-group mb-3">
                <label>
                Full Name
                <input type="text" id="name"
                defaultValue={data.name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
                className="form-control form-control-lg" placeholder="full name" aria-label="name" aria-describedby="basic-addon2"/>
                </label>
                </div>

                <div className="input-group mb-3">
                <label>
                Phone Number
                <input type="number" id="phoneno"
                defaultValue={data.phoneno}
                onChange={(event) => {
                    setPhoneno(event.target.value);
                }}
                className="form-control form-control-lg" placeholder="phone number" aria-label="phoneno" aria-describedby="basic-addon2"/>
                </label>
                </div>
                {/* {Object.keys(phonenoErr).map((key)=>{
                  return <div style={{color:"red"}}>{phonenoErr[key]}</div>
                })} */}

                <Link to ="/Projects">
                <Submit
                
                onClick={(event) => {
                  event.preventDefault();
                  if (email != "" && password != "" && rollno != "" && name != "" && phoneno != "" && bio != "") {
                    handleSubmit(event, password, email, rollno, name, phoneno, bio);
                  } else {
                    console.log("Username and Password can't be empty");
                  }
                }}
              >
                {" "}
                save & proceed
              </Submit>
              </Link>
               
                </form>
                </div>
                
                
                

            </div>
            </div>
        )
    }


export default withRouter(Profile);