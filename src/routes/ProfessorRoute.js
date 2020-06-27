import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services/auth.service';

export default function ProfessorRoute({component: Component, ...rest}){

    
    return (

        (authService.isLoged() === "Prof")
        ?
        
        <Route {...rest} render={props => (
            <Component {...props} />
        )} /> 
        
        :
        <Redirect to="/home" />   

    );
};