
import React, { Fragment } from "react"
import { Redirect } from "react-router-dom"

export default function AuthRequired(props){
    const isAuthenticated = localStorage.getItem('isAuthenticated')

    if(isAuthenticated){
        return props.orComponent;
    } else {
        return <Redirect to="/Login"/>
    }
}