import React, { useState } from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';
import Profile from "./profile";
import ImageUploadForm from "./ImageUploadForm";


import Scoursed from './courseContent';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  } from "react-router-dom";
  

function App() {
  return (
    
    <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Switch>
      {/* This route is for home component
      with exact path "/", in component props
      we passes the imported component
      <Route exact path="/" component={Home} />*/}
        
      {/* This route is for about component
      with exact path "/about", in component
      props we passes the imported component*/}
   
   <Route path="/ImageUploadForm" component={ImageUploadForm} />
       <Route path="/course" component={Scoursed} />
      <Route path="/profile" component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
         {/* This route is for about component
      with exact path "/about", in component
      props we passes the imported component*/}
      <Route path="/Register" component={Register} />
     
        
      {/* This route is for contactus component
      with exact path "/contactus", in
      component props we passes the imported component*/}
      <Route path="/" component={Login} />


      
        
      {/* If any route mismatches the upper
      route endpoints then, redirect triggers
      and redirects app to home component with to="/" onClick={() => window.location.reload(false)}*/}
      <Redirect to="/" />
      </Switch>
    </Router>
    </>
    
      );

}

export default App;
