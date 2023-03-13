import React, {useState} from 'react';
import './updateStudentForm.css';

export const StudentForm = (props) => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [dob, setDob] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fname,
            lname,
            dob,
            mobile,
            email);
        
        fetch("http://localhost:5000/student", {
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
                dob,
                mobile,
                email
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userRegister");
              if (data.status === "OK") {
            
                alert("Update Successful");
               
              } else {
                alert("Something went wrong");
              }
            });
            setFName("");
            setLName("");
            setDob("");
            setMobile("");
            setEmail("");
           
        };
 
    return(
    <div className='back'>
      <div className="form" onSubmit={handleSubmit}>
          <div className="form-body">
            <div className='h123'>Student Pofile</div>
              <div className="username">
                  <label class name="h1" className="form__label" >First Name</label>
                  <input className="int" value={fname} name="fname" onChange={(e) => setFName(e.target.value)} type="text" id="fname" placeholder="First Name"/>
              </div>
              <div className="Last Name">
                  <label className="form__label" >Last Name   </label>
                  <input  type="text" value={lname} name="lname" onChange={(e) => setLName(e.target.value)} id="lname"  className="int"placeholder="LastName"/>
              </div>
              <div className="Birth Date">
                  <label className="form__label" >Birth Date   </label>
                  <input  type="text" value={dob} name="dob" onChange={(e) => setDob(e.target.value)} id="dob"  className="int"placeholder="07/16/1996"/>
              </div>
              <div className="Gender">
                  <label className="form__label" >Mobile Number   </label>
                  <input  type="text" value={mobile} name="mobile" onChange={(e) => setMobile(e.target.value)} id="mobile"  className="int"placeholder="Mobile"/>
              </div>
              <div className="email">
                  <label className="form__label" >Email  </label>
                  <input  value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" id="email" className="int" placeholder="ABC@gmail.com"/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn" value={"Submit"}onClick={handleSubmit}>Update</button>
          </div>
      </div> 
      </div>     
    )       
}
export default StudentForm;