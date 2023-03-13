//imports the necessary modules and libraries used in the `Register` component.
import React,{useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {  MDBIcon} from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './Register.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
}
from 'mdb-react-ui-kit';

//Register component
export const Register = (props) => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [uname, setUName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCPass] = useState('');

    //Function to handle form submission

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fname,lname,uname,email,pass,cpass);

        //Send a POST request to register user
        
        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                lname,
                uname,
                email,
                pass,
                cpass
            }),
          })
            .then((res) => res.json()) // Convert response to JSON format
            .then((data) => {
              console.log(data, "userRegister");
              if (data.status === "OK") {
            
                alert("Registration Successful");
                props.history.push('/Login'); // Navigate to login page
                window.location.reload(false);
              } else {
                alert("Something went wrong");
              }
            }); // clear form fields after form submission
            setFName("");
            setLName("");
            setUName("");
            setEmail("");
            setPass("");
            setCPass("");
        };
     
    
    //render registration form
    return (   
<form className="register-form" onSubmit={handleSubmit} >    
<MDBContainer fluid  >
<MDBCard className='text-black m-5 register'>
  <MDBCardBody>
    <MDBRow>
      <MDBCol  md='8' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <h4 className="text-center bold h1 fw-bold mb-5 mx-1 mx-md-4 mt-2">Register</h4>
      
        <div className="d-flex flex-row align-items-center mb-2 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput value={fname} name="fname" onChange={(e) => setFName(e.target.value)} id="fname" placeholder="First Name" className='w-100' required/>
         </div>

        <div className="d-flex flex-row align-items-center mb-2 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput value={lname} name="lname" onChange={(e) => setLName(e.target.value)} id="lname" placeholder="Last Name" className='w-100' required/>
        </div>

        <div className="d-flex flex-row align-items-center mb-2 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput value={uname} name="uname" onChange={(e) => setUName(e.target.value)} id="uname" placeholder="User Name" className='w-100' required/>
        </div>

        <div className="d-flex flex-row align-items-center mb-2">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="email@gmail.com" id="email" name="email"className='w-100'  required/>
        </div>

        <div className="d-flex flex-row align-items-center mb-2">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" required/>
        </div>

        <div className="d-flex flex-row align-items-center mb-2">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput value={cpass} onChange={(e) => setCPass(e.target.value)} type="Password" placeholder="Confirm Password" id="cpassword" name="cpassword" required/>
        </div>

        <div className="d-flex flex-row align-items-center mb-2">
        <button type="button" class="btn btn-primary" variant="primary" value={"Submit"}onClick={handleSubmit}>Register </button>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
        <button className="link-btn" onClick={() => window.location.reload(false)}><Link to="/Login" >Already have an account?     Login here. </Link>
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
);
}
export default Register;