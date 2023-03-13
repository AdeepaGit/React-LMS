// Importing React module and courses.css file
import React, { Component } from 'react';
import './content.css';


class Scoursed extends Component {
    state = {  } 
    

    render() { 

                return (
                <div className="background"> 
                <div className ="cContainer">
                <div className="row">
                <div className="col-md-4">
                <div className="cTitle">Courses Content</div>
                
                <div className="title2">Semester 1</div>
                        <ul  className="subject">
                                    <li>Software Engineering Concepts and Programming</li>
                                     <li>Web Application Development</li>
                                    <li>Introduction to Object Oriented Programming</li>
                
                </ul>                  
                <div className="title2" >Semester 2</div>
                <ul className="subject" >
                <li>Communication Skills</li>
                <li>Introduction to Business Studies</li>
                <li>Computer Security Concepts </li>
                </ul>
                </div>
                <div className="col-md-6">
                <center>  <center><h2>Softwere Enginering</h2></center>
    
                  <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col"><h4><b>Level</b></h4></th>
                      <th scope="col"><h4><b>Year</b></h4></th>
                      
                      
                    </tr>
                  </thead>
                  <tbody className='tdcolor'>
                    <tr >
                      <td >Certificate</td>
                      <td>Year 1</td>
                    
                      
                    </tr>
                    <tr>
                      <td scope="row">Diploma</td>
                      <td>Year 2</td>
                      
                      
                    </tr>
                    <tr>
                      <td scope="row">HND</td>
                      <td>Year 3</td>
                      
                    </tr>
                    <tr>
                      <td scope="row">BSC</td>
                      <td>Year 4</td>
                    
                    </tr>
                  </tbody>
                </table>
                    </center>
                </div>
                </div>
        </div>
        </div>
        );
    }
}
 
export default Scoursed;