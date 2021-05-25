import React from "react";
import styled from "styled-components";

export const FormGroup = styled.div `
	color: palevioletred;
    display: block;
	width: 100%;
	${'' /* margin: 50px auto; */}
`;

export const Label = styled.label `
	margin-bottom: 0.5em;
	${'' /* color: palevioletred; */}
    display: block;
`;

export const Input = styled.input `
	padding: 0.5em 0.5em 1em 0.75em;
	border: none;
	width: 100%;
	margin-bottom: 0.5em;
  outline: none;
  box-shadow:none !important;
  border:1px solid #ccc !important;
`;

export const Message = styled.label `
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;

export const Submit = styled.button `
  display: block;
	padding: 0.5em 0.5em 1em 0.75em;
  width: 100%;
  cursor: ${ (props) => props.loginState == "empty"
  ? "default"
  : props.loginState == "filled"
    ? "pointer"
    : ""};
  background-color: #0F8797;
  box-shadow: none;
  border: none;
  color: #fff;
  &:hover {

  }
`;
