import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services/auth.service';

export default function StudentRoute({component: Component, ...rest}){

    
    return (

        // (authService.isLoged() && authService.isLoged()!=="Admin")
        // ?
        
        <Route {...rest} render={props => (
            <Component {...props} />
        )} /> 
        
        // :(authService.isLoged()==="Admin")?
        //     <Redirect to="/students" /> : <Redirect to="/login" />   

    );
};