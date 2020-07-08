import React from 'react';
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import StudentRoute from "./routes/StudentRoute";
import PublicRoute from "./routes/PublicRoute";
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Students from './views/Students/Students';
import Assignments from './views/Assignments/Assignments';
import Workbook from './views/Workbooks/Workbook'

function App() {
  return (
    
    <BrowserRouter>
      <Switch>

      <PublicRoute component={Home} path="/home" />
      <PublicRoute component={Login} path="/login" />
      <StudentRoute component={Students} path="/students"/>
      <StudentRoute component={Assignments} path="/assigments"/>
      <StudentRoute component={Workbook} path="/workbook"/>
{/* 
        <PublicRoute component={LogIn } path="/login" />

{/* 
        
        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute component={CreateOrderItem} path="/order/:id" />
        <PrivateRoute component={CreatePoll} path="/createpoll" />
        <PrivateRoute component={Vote} path="/vote/:id" />
        <PrivateRoute component={Profile} path="/profile" />

        <AdminRoute component={Settings} path="/settings" /> */}
        {/* <Redirect to={authService.isLoged() ? "/home" : "/login"} /> */}

        <Redirect to="home" />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
