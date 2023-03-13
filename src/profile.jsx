// import necessary components and styles
import Popup from "./popup";
import { useState } from "react";
import Courses from "./courses";
import StudentMarks from "./StudentMarks";
import StudentForm from "./updateStudentForm";
import ImageUploadForm from "./ImageUploadForm";
import './profile.css';

// define Profile component

const Profile = () => {

// state variables for controlling popups

const [buttonPopup,setButtonPopup] = useState(false); {/*Edit image popup */}
const [buttonCal,setButtonCal] = useState(false); {/*cal popup Button */}
const [buttonForm,setButtonForm] = useState(false);{/*update popup Button */}

    return(
        <>
        <div className="container emp-profile">
                  
              <div className="row">
              <div className="col-md-4">      
              <div className="profile">
              {/*profile image */}
               < ImageUploadForm/>
            
              {/*Edit image Button */}
             </div>
                   </div>
                   <div className="col-md-6">
                    <div className="details">
                      <div><h4><a href=""><svg id="logo-35" width="36" height="25" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path> </svg></a>Genaral Information</h4></div>
                      <div> 
                        <table className="table table-striped tbl">
                          <tbody>
                            <tr className="table-primary">
                                <td className="tbl">First Name</td>
                                <td>Achini</td>
                            </tr>
                            <tr className="table-success">
                                <td>Last Name</td>
                                <td>Fernando</td>
                            </tr>
                            <tr className="table-primary">
                                <td>Date Of Birth</td>
                                <td>02/21/1996</td>
                            </tr>
                            <tr className="table-success">
                                <td>Email</td>
                                <td>achini@gmail.com</td>
                            </tr>
                            <tr className="table-primary">
                                <td>Academic Year</td>
                                <td>2023</td>
                            </tr>
                            </tbody>
                        </table>
                        {/*Edit profile Button */}
                        <button className="btn btn-secondary btnn" onClick={() => setButtonForm(true)}>Edit Profile</button>
                      </div>
                    </div>
                    
                   </div>
                </div>
                <div className="row">
                
                <div className="col-md-4">
                  <Courses/>
                </div>
                <div className="col-md-6">
                <div className="details" >
                    <div ><h4><a href=""><svg id="logo-35" width="36" height="25" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path> </svg></a>Other Information</h4></div>
                      <div> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quaerat mollitia esse, nam pariatur voluptatem odit officiis obcaecati minima corrupti at! Vero ex in quas alias laudantium facilis laboriosam illum.</p>
                        
                      </div>
                    </div>
                    <div className="details" >
                    <div ><h4><a href=""><svg id="logo-35" width="36" height="25" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path> </svg></a>
                    Check Your GPA</h4>
                    <div><button className="btn btn-secondary btnn" onClick={() => setButtonCal(true)}>GPA Cal</button></div>
                    </div>
                      <div> 
                        
                      </div>
                    </div>
                </div>
                </div>
                <div className="row">
                
                <div className="col-md-4">
                  
                </div>
                
                </div>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                <hr/>
                <button className="btn btn-secondar">Uplode Image</button>
                   </div>
                   </Popup>

                   <Popup trigger={buttonCal} setTrigger={setButtonCal}>
            <div className="">
                <hr/>
                <StudentMarks/>
                   </div>
                   </Popup>
                   <Popup trigger={buttonForm} setTrigger={setButtonForm}>
                <div className="">
        
                <hr/>
                <StudentForm/>
                   </div>
                   </Popup>
        </div>
        
        </>
    )
}
export default Profile;