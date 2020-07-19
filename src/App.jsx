import React,{useEffect} from 'react';
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import StudentRoute from "./routes/StudentRoute";
import PublicRoute from "./routes/PublicRoute";
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Students from './views/Students/Students';
import Assignments from './views/Assignments/Assignments';
import Workbook from './views/Workbooks/Workbook'
import startSocketConnection from './services/socket.services';
import StudentProfile from './views/Profile/StudentProfile';
import AboutUs from './views/AboutUs/AboutUs'

function App() {
  useEffect(() => {
    startSocketConnection();
    return () => {
      
    }
  }, [])
  return (
    
    <BrowserRouter>
      <Switch>

      <PublicRoute component={Home} path="/home" />
      <PublicRoute component={Login} path="/login" />
      <StudentRoute component={Students} path="/students"/>
      <StudentRoute component={Assignments} path="/assigments"/>
      <StudentRoute component={Workbook} path="/workbook"/>
      <StudentRoute component={StudentProfile} path="/profile"/>
      <StudentRoute component={AboutUs} path="/about"/>
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
