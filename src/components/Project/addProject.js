import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory, useState } from "react-router-dom";
import styled from "styled-components";
import './Project.scss';
import {Button} from 'react-bootstrap';
import { APIlink } from "../../Helper";
import Header from '../../components/Header/Header';
import { FormGroup, Label, Input, Message } from '../../components/common';
import Media from 'react-media';



const Submit = styled.button`
  width: 200px;
  padding: 0.5em;
  color: #fff;
  font-weight: bolder;
  box-shadow: none;
  border: none;
  margin-bottom: 2rem;
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
            response = await fetch (`${APIlink}/projects`, requestOptions)
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
                <Header />
            <div className="register row justify-content-center align-items-center">

             {/* <div className = "w-50 p-3">
                <h1 style={{color: '#8C8C8C'}}>Project Title Here</h1>
                <br></br>
                <br></br>
                <form>

                  <FormGroup>

                    <Input id="profName"
                    value={profName}
                    onChange={(event) => {
                        setprofName(event.target.value);
                        setErr("");
                        if (event.target.value != "" &&  responsibilities != "" && description != "" && stipend != "") {
                          setloginstate("filled");
                        }
                    }}
                    className="" placeholder="professor's name" aria-label="profName" aria-describedby="basic-addon2"/>

                  </FormGroup>

                  <FormGroup>

                    <textarea id="description"
                    style={{height:"150px",display: "block",  width: '100%', border:'1px solid #ccc',boxShadow :'none',	padding: '0.5em 0.5em 1em 0.75em', marginBottom: '0.5em', webkitAppearance: 'none',
                   outline: 'none'}}
                    value={description}
                    onChange= {(event) => {
                        setErr("");
                        setdescription(event.target.value);
                        if (event.target.value != ""  && responsibilities != "" && profName != "" && stipend != "") {
                          setloginstate("filled");
                        }}}
                    className="" placeholder=" description" aria-label="institute-description" aria-describedby="basic-addon2"></textarea>

                  </FormGroup>

                  <FormGroup>

                    <Input id="responsibilities"
                    style={{height: '75px'}}
                    value={responsibilities}
                    onChange={(event) => {
                        setresponsibilities(event.target.value);
                        setErr("");
                        if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                          setloginstate("filled");
                        }
                    }}
                    className="" placeholder="responsibilties" aria-label="responsibilities" aria-describedby="basic-addon2"/>

                  </FormGroup>

                  <FormGroup>

                    <Input id="responsibilities"
                    style={{height: '75px'}}
                    value={preReq}
                    onChange={(event) => {
                        setpreReq(event.target.value);
                        setErr("");
                        if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                          setloginstate("filled");
                        }
                    }}
                    className="" placeholder="prerequisites" aria-label="responsibilities" aria-describedby="basic-addon2"/>

                  </FormGroup>

                  <FormGroup>

                    <Input id="stipend"
                    type="number"
                    value={duration}
                    onChange={(event) => {
                        setduration(event.target.value);
                        setErr("");
                        if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                          setloginstate("filled");
                        }
                    }}
                    className="" placeholder="duration (in months)" aria-label="stipend" aria-describedby="basic-addon2"/>

                  </FormGroup>

                  <FormGroup>

                    <Input id="stipend"
                    value={stipend}
                    onChange={(event) => {
                        setstipend(event.target.value);
                        setErr("");
                        if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                          setloginstate("filled");
                        }
                    }}
                    className="" placeholder="stipend (per month)" aria-label="stipend" aria-describedby="basic-addon2"/>

                  </FormGroup>

                  <FormGroup>

                    <Input id="stipend"
                      type="number"
                    value={totalSlots}
                    onChange={(event) => {
                        settotalSlots(event.target.value);
                        setErr("");
                        if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                          setloginstate("filled");
                        }
                    }}
                    className="" placeholder="# of students required" aria-label="stipend" aria-describedby="basic-addon2"/>

                  </FormGroup>

                  <FormGroup>

                    <Input id="responsibilities"
                    style={{height:"75px"}}
                    value={addDetails}
                    onChange={(event) => {
                        setaddDetails(event.target.value);
                        setErr("");
                        if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                          setloginstate("filled");
                        }
                    }}
                    className="" placeholder="additional details" aria-label="responsibilities" aria-describedby="basic-addon2"/>

                  </FormGroup>

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
                </div> */}



                <Media query={{ maxWidth: 795 }}>
            {matches =>
              matches ? (
                <div style={{width: '75%'}}>
                   <h1 style={{color: '#8C8C8C'}}>Project Title Here</h1>
                   <br></br>
                   <br></br>
                   <form>

                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <Input id="profName"
                       value={profName}
                       onChange={(event) => {
                           setprofName(event.target.value);
                           setErr("");
                           if (event.target.value != "" &&  responsibilities != "" && description != "" && stipend != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="professor's name" aria-label="profName" aria-describedby="basic-addon2"/>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>

                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <textarea id="description"
                       style={{height:"150px",display: "block",  width: '100%', border:'1px solid #ccc',boxShadow :'none',	padding: '0.5em 0.5em 1em 0.75em', marginBottom: '0.5em', webkitAppearance: 'none',
                      outline: 'none'}}
                       value={description}
                       onChange= {(event) => {
                           setErr("");
                           setdescription(event.target.value);
                           if (event.target.value != ""  && responsibilities != "" && profName != "" && stipend != "") {
                             setloginstate("filled");
                           }}}
                       className="" placeholder=" description" aria-label="institute-description" aria-describedby="basic-addon2"></textarea>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>

                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <textarea id="responsibilities"
                       style={{height:"75px",display: "block",  width: '100%', border:'1px solid #ccc',boxShadow :'none',	padding: '0.5em 0.5em 1em 0.75em', marginBottom: '0.5em', webkitAppearance: 'none',
                      outline: 'none'}}
                      value={responsibilities}
                      onChange={(event) => {
                          setresponsibilities(event.target.value);
                          setErr("");
                          if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                            setloginstate("filled");
                          }
                      }}
                      className="" placeholder="responsibilties" aria-label="responsibilities" aria-describedby="basic-addon2"></textarea>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>


                     {/* <FormGroup>
                       <Input id="responsibilities"
                       style={{height: '75px'}}
                       value={responsibilities}
                       onChange={(event) => {
                           setresponsibilities(event.target.value);
                           setErr("");
                           if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="responsibilties" aria-label="responsibilities" aria-describedby="basic-addon2"/>
                     </FormGroup> */}



                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <textarea id="prerequisites"
                       style={{height:"75px",display: "block",  width: '100%', border:'1px solid #ccc',boxShadow :'none',	padding: '0.5em 0.5em 1em 0.75em', marginBottom: '0.5em', webkitAppearance: 'none',
                      outline: 'none'}}
                      value={preReq}
                      onChange={(event) => {
                          setpreReq(event.target.value);
                          setErr("");
                          if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                            setloginstate("filled");
                          }
                      }}
                      className="" placeholder="prerequisites" aria-label="responsibilities" aria-describedby="basic-addon2"></textarea>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>


                     {/* <FormGroup>
                       <Input id="responsibilities"
                       style={{height: '75px'}}
                       value={preReq}
                       onChange={(event) => {
                           setpreReq(event.target.value);
                           setErr("");
                           if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="prerequisites" aria-label="responsibilities" aria-describedby="basic-addon2"/>
                     </FormGroup> */}




                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <Input id="stipend"
                       type="number"
                       value={duration}
                       onChange={(event) => {
                           setduration(event.target.value);
                           setErr("");
                           if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="duration (in months)" aria-label="stipend" aria-describedby="basic-addon2"/>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>

                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <Input id="stipend"
                       value={stipend}
                       onChange={(event) => {
                           setstipend(event.target.value);
                           setErr("");
                           if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="stipend (per month)" aria-label="stipend" aria-describedby="basic-addon2"/>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>

                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <Input id="stipend"
                         type="number"
                       value={totalSlots}
                       onChange={(event) => {
                           settotalSlots(event.target.value);
                           setErr("");
                           if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="# of students required" aria-label="stipend" aria-describedby="basic-addon2"/>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>



                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <textarea id="responsibilities"
                       style={{height:"75px",display: "block",  width: '100%', border:'1px solid #ccc',boxShadow :'none',	padding: '0.5em 0.5em 1em 0.75em', marginBottom: '0.5em', webkitAppearance: 'none',
                      outline: 'none'}}
                      value={addDetails}
                      onChange={(event) => {
                          setaddDetails(event.target.value);
                          setErr("");
                          if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                            setloginstate("filled");
                          }
                      }}
                      className="" placeholder="additional details" aria-label="responsibilities" aria-describedby="basic-addon2"></textarea>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>

                     {/* <FormGroup>
                       <Input id="responsibilities"
                       style={{height:"75px"}}
                       value={addDetails}
                       onChange={(event) => {
                           setaddDetails(event.target.value);
                           setErr("");
                           if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="additional details" aria-label="responsibilities" aria-describedby="basic-addon2"/>
                     </FormGroup> */}

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
              ) : (
                <div style={{width: '50%'}}>
                   <h1 style={{color: '#8C8C8C'}}>Project Title Here</h1>
                   <br></br>
                   <br></br>
                   <form>

                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <Input id="profName"
                       value={profName}
                       onChange={(event) => {
                           setprofName(event.target.value);
                           setErr("");
                           if (event.target.value != "" &&  responsibilities != "" && description != "" && stipend != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="professor's name" aria-label="profName" aria-describedby="basic-addon2"/>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>

                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <textarea id="description"
                       style={{height:"150px",display: "block",  width: '100%', border:'1px solid #ccc',boxShadow :'none',	padding: '0.5em 0.5em 1em 0.75em', marginBottom: '0.5em', webkitAppearance: 'none',
                      outline: 'none'}}
                       value={description}
                       onChange= {(event) => {
                           setErr("");
                           setdescription(event.target.value);
                           if (event.target.value != ""  && responsibilities != "" && profName != "" && stipend != "") {
                             setloginstate("filled");
                           }}}
                       className="" placeholder=" description" aria-label="institute-description" aria-describedby="basic-addon2"></textarea>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>

                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <textarea id="responsibilities"
                       style={{height:"75px",display: "block",  width: '100%', border:'1px solid #ccc',boxShadow :'none',	padding: '0.5em 0.5em 1em 0.75em', marginBottom: '0.5em', webkitAppearance: 'none',
                      outline: 'none'}}
                      value={responsibilities}
                      onChange={(event) => {
                          setresponsibilities(event.target.value);
                          setErr("");
                          if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                            setloginstate("filled");
                          }
                      }}
                      className="" placeholder="responsibilties" aria-label="responsibilities" aria-describedby="basic-addon2"></textarea>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>


                     {/* <FormGroup>
                       <Input id="responsibilities"
                       style={{height: '75px'}}
                       value={responsibilities}
                       onChange={(event) => {
                           setresponsibilities(event.target.value);
                           setErr("");
                           if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="responsibilties" aria-label="responsibilities" aria-describedby="basic-addon2"/>
                     </FormGroup> */}



                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <textarea id="prerequisites"
                       style={{height:"75px",display: "block",  width: '100%', border:'1px solid #ccc',boxShadow :'none',	padding: '0.5em 0.5em 1em 0.75em', marginBottom: '0.5em', webkitAppearance: 'none',
                      outline: 'none'}}
                      value={preReq}
                      onChange={(event) => {
                          setpreReq(event.target.value);
                          setErr("");
                          if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                            setloginstate("filled");
                          }
                      }}
                      className="" placeholder="prerequisites" aria-label="responsibilities" aria-describedby="basic-addon2"></textarea>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>


                     {/* <FormGroup>
                       <Input id="responsibilities"
                       style={{height: '75px'}}
                       value={preReq}
                       onChange={(event) => {
                           setpreReq(event.target.value);
                           setErr("");
                           if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="prerequisites" aria-label="responsibilities" aria-describedby="basic-addon2"/>
                     </FormGroup> */}




                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <Input id="stipend"
                       type="number"
                       value={duration}
                       onChange={(event) => {
                           setduration(event.target.value);
                           setErr("");
                           if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="duration (in months)" aria-label="stipend" aria-describedby="basic-addon2"/>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>

                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <Input id="stipend"
                       value={stipend}
                       onChange={(event) => {
                           setstipend(event.target.value);
                           setErr("");
                           if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="stipend (per month)" aria-label="stipend" aria-describedby="basic-addon2"/>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>

                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <Input id="stipend"
                         type="number"
                       value={totalSlots}
                       onChange={(event) => {
                           settotalSlots(event.target.value);
                           setErr("");
                           if (event.target.value != "" &&  responsibilities != "" && profName != "" && description != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="# of students required" aria-label="stipend" aria-describedby="basic-addon2"/>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>



                     <FormGroup>
                       {/* <Label htmlFor="label">Label</Label> */}
                       <textarea id="responsibilities"
                       style={{height:"75px",display: "block",  width: '100%', border:'1px solid #ccc',boxShadow :'none',	padding: '0.5em 0.5em 1em 0.75em', marginBottom: '0.5em', webkitAppearance: 'none',
                      outline: 'none'}}
                      value={addDetails}
                      onChange={(event) => {
                          setaddDetails(event.target.value);
                          setErr("");
                          if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                            setloginstate("filled");
                          }
                      }}
                      className="" placeholder="additional details" aria-label="responsibilities" aria-describedby="basic-addon2"></textarea>
                       {/* <Message>This is the validation message</Message> */}
                     </FormGroup>

                     {/* <FormGroup>
                       <Input id="responsibilities"
                       style={{height:"75px"}}
                       value={addDetails}
                       onChange={(event) => {
                           setaddDetails(event.target.value);
                           setErr("");
                           if (event.target.value != "" && description != "" && profName != "" && stipend != "") {
                             setloginstate("filled");
                           }
                       }}
                       className="" placeholder="additional details" aria-label="responsibilities" aria-describedby="basic-addon2"/>
                     </FormGroup> */}

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
              )
            }
          </Media>


            </div>
            </div>
        )
    }


export default AddProject;
