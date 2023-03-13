//imports the necessary modules and libraries used in the `Login` component.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon} from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.css';
import SideNav from "./Dashboard";
import './Login.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput, 
}
from 'mdb-react-ui-kit';
import { Alert } from "bootstrap";
import { Register } from "./Register";

//Login component
export const Login = (props) => {
    const [uname, setUName] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(uname,pass);
            //Send a POST request to  user
        fetch("http://localhost:5000/login-user", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                uname,
                pass
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userLogin");
              if (data.status === "OK") {
                
                alert("login successful");
                window.localStorage.setItem("token", data.data);
                window.localStorage.setItem("loggedIn", true);
                
                props.history.push('/Dashboard');
                window.location.reload(false);
              } else {
                alert("Something went wrong");
              }
            });
            setUName("");
            setPass("");
        };
     

    return (
  <div className="backgroundcol">
  <form className="register-form" onSubmit={handleSubmit}>
  <MDBContainer fluid>
  <MDBCard className='text-black m-5 loginsize' >
  <MDBCardBody>
    <MDBRow>
      <MDBCol  md='8' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
        <h4 className="text-center bold h1 fw-bold mb-5 mx-1 mx-md-4 mt-2">Login</h4>
      
                <div className="d-flex flex-row align-items-center mb-2 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput value={uname} name="uname" onChange={(e) => setUName(e.target.value)} id="uname" placeholder="User Name"  className='w-100' required/>
                </div>
  
                <div className="d-flex flex-row align-items-center mb-2">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" required/>
                </div>
  
                <div className="d-flex flex-row align-items-center mb-2">
                   <button type="button" class="btn btn-primary" variant="primary" value={"Submit"} onClick={handleSubmit}>Login </button>
                  </div>
                 <div className="d-flex flex-row align-items-center mb-4"></div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                <button className="link-btn" onClick={() => window.location.reload(false)}><Link to="/Register" >Don't have an account? Register here.</Link>
                </button>
                </div>

              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
  <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp' alt="Sample photo" className="rounded-start" fluid/>
</MDBCol>
</MDBRow>
</MDBCardBody>
</MDBCard>
</MDBContainer>
</form>
</div>
    );

}
export default Login;