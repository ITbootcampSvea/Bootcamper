import React from 'react';
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

import './app.css';

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
{/* 
        <PublicRoute component={LogIn } path="/login" />

        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute component={CreateOrderItem} path="/order/:id" />
        <PrivateRoute component={CreatePoll} path="/createpoll" />
        <PrivateRoute component={Vote} path="/vote/:id" />
        <PrivateRoute component={Profile} path="/profile" />

        <AdminRoute component={Settings} path="/settings" /> */}

        <Redirect to={authService.isLoged() ? "/home" : "/login"} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
