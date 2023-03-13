// Importing React module and courses.css file
import React from 'react';
import './courses.css';
// Importing Link component from react-router-dom module
import { Link } from "react-router-dom";


function Courses() {
    return (
      <div className="course">
        <table>
          <tbody>
          <tr>
            <th className="activec"  colSpan="3" >  <h4><a href=""><svg id="logo-35" width="36" height="25" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path> </svg></a>
            Active Courses</h4></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td className='tc'  colSpan="3"><button className='btn btn-link' onClick={() => window.location.reload(false)}><Link to="/course" > 
            Software Engineering</Link></button></td>
            <td></td>
            <td id='active'><button className='btn btn-link' onClick={() => window.location.reload(false)}><Link to="/course" >Active</Link></button></td>
          </tr>
          <tr>
            <td className='tc'  colSpan="3">
            <button className='btn btn-link' onClick={() => window.location.reload(false)}><Link to="/" > 
            Computer Science</Link></button></td>
            <td></td>
            <td><button className='btn btn-link' onClick={() => window.location.reload(false)}><Link to="/" >Available</Link></button>
              </td>
          </tr>
          <tr>
            <td className='tc' colSpan="3"><button className='btn btn-link' onClick={() => window.location.reload(false)}><Link to="/" > 
            Computer Science</Link></button></td>
            <td></td>
            <td><button className='btn btn-link' onClick={() => window.location.reload(false)}><Link to="/" >Available</Link></button></td>
          </tr>
          </tbody>
        </table>

        <table>
          <tbody>
          <tr>
          <th className=''  colSpan="3" >  <h4><a href=""><svg id="logo-35" width="36" height="25" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path> </svg></a>
            Recent Class</h4></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td className='tc'  colSpan="3">Acrobastics</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='tc'  colSpan="3">Pilates Intro</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className='tc' colSpan="3">Circus Prac</td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
      
      
      
      
    );
    
  }
    
  export default Courses;