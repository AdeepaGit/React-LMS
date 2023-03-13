//imports the necessary modules and libraries used in the `SideNav` component.

import React from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import { FaHome, FaChalkboardTeacher, FaGraduationCap, FaEnvelope, FaUsers, FaChartPie, FaCog,FaItunesNote,FaSignOutAlt } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import logo from "./logo.svg";
import "./Dashboard.css";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

//show Pie chart
export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
//show Doughnut chart
export const data1 = {
  labels: ['Red', 'Orange', 'Yellow', 'Purple', 'Green', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [9, 19, 3, 8, 2, 3],
      backgroundColor: [
        '#F66D44',
        '#FEAE65',
        '#E6F69D',
        '#9B3192',
        '#64C2A6',
        '#2D87BB',
      ],
      borderColor: [
        '#F66D44',
        '#FEAE65',
        '#E6F69D',
        '#9B3192',
        '#64C2A6',
        '#2D87BB',
      ],
      borderWidth: 1,
    },
  ],
};


function SideNav() {
  return (
    //creates a container using the `Container` component from react-bootstrap, which holds the sidebar.

    <Container fluid className="sidebarContainer">
    <div className="row sidefull">
    <div className="col-md-2 sidebarbox">
    {/* defines the navbar using the `Navbar` component from react-bootstrap. It contains the brand logo and name, a toggle button for smaller screens, and a collapsible menu. */}
    
    <Navbar bg="white" expand="lg" className="flex-column">
      <Navbar.Brand href="#home" className="mt-3 mb-4">
        <img src={logo} width="30" height="30" className="d-inline-block align-top mr-2" alt="FlexyCode logo" />
        <span className="font-weight-bold">FlexyCode</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

    {/* defines the navigation links using the `Nav` and `Nav.Link` components from react-bootstrap. It includes the icons for each link */}
        <Nav className="flex-column mt-4 mb-4">
          <Nav.Link href="#overview"><FaHome className="menu-icon" /><span className="menu-text">Overview</span></Nav.Link>
          <Link to="/Profile" className="nav-link" onClick={() => window.location.reload(false)}>
        <FaChalkboardTeacher className="menu-icon" />
        <span className="menu-text">Profile</span>
          </Link>
        <Link to="/course" className="nav-link" onClick={() => window.location.reload(false)}>
         <FaGraduationCap className="menu-icon" />
        <span className="menu-text">Courses</span>
           </Link>
        
          <Nav.Link href="#messages"><FaEnvelope className="menu-icon" /><span className="menu-text">Messages</span></Nav.Link>
          <Nav.Link href="#instructors"><FaUsers className="menu-icon" /><span className="menu-text">Instructors</span></Nav.Link>
          <Nav.Link href="#reports"><FaChartPie className="menu-icon" /><span className="menu-text">Reports</span></Nav.Link>
          <Nav.Link href="#recordings"><FaItunesNote className="menu-icon" /><span className="menu-text">Recordings</span></Nav.Link>
         
          <NavDropdown title={<span><FaCog className="menu-icon" /> <span className="menu-text">Settings</span></span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {/* search bar using Bootstrap's Form and FormControl components */}
   </div>
   <div className="col-md-10">
    <div className="row">
      <div className="col-md-8">
      <Form inline className="w-100 mt-3 search-form" >
      <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" />
      </Form>
      </div>
      <div className="col-md-4">
      <button class="btn btn-light" onClick={() => window.location.reload(false)}><Link to="/Login" 
      style={{color:"black"}}><FaSignOutAlt/>   LogOut</Link></button>
      </div>
      </div>
      <div className="row">
      <div className="col-md-3 chartbox">
      <Pie data={data} />
      </div>
      <div className="col-md-3 chartbox">
      <Doughnut data={data1} />
    </div>
    <div className="col-md-3 chartbox">
      <Pie data={data} />
    </div>
    </div>

    <div className="row">  
    <div className="col-md-4 sectionbox ">
          <div className="card mb-4 shadow-sm">
          <svg id="logo-14" className="gradient" width="125" height="100" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" class="ccustom" fill="#68DBFF"></path> <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" class="ccompli1" fill="#FF7917"></path> <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" class="ccompli2" fill="#5D2C02"></path> </svg>
            <div className="card-body"> 
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 sectionbox">
          <div className="card mb-4 shadow-sm">
          <svg id="logo-16" className="gradient" width="125" height="100" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z" class="ccompli1" fill="#FFD200"></path> <path d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z" class="ccompli2" fill="#06E07F"></path> <path d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z" class="ccustom" fill="#E3073C"></path> <path d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z" class="ccustom" fill="#1F84EF"></path> </svg>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 sectionbox">
          <div className="card mb-4 shadow-sm">
            <svg id="logo-79" class="gradient" width="125" height="100" viewBox="0 0 125 40" fill="none" xmlns="http://www.w3.org/2000/svg">  <path class="ccustom" d="M88.861 37.225c.759 0 1.208-.575 1.208-1.474 0-.932-.482-1.474-1.192-1.474-.406 0-.688.18-.899.466h-.01V33.27h-.44v3.873h.44v-.368h.01c.228.314.504.45.883.45Zm-.032-.369c-.596 0-.889-.471-.889-1.1 0-.606.282-1.105.894-1.105.531 0 .786.477.786 1.105 0 .634-.255 1.1-.791 1.1Zm1.983 1.214c.341 0 .558-.12.785-.7l1.198-3.028h-.466l-.64 1.745c-.086.233-.184.547-.184.547h-.01s-.104-.314-.19-.547l-.661-1.745h-.477l1.094 2.72-.108.276c-.108.271-.233.342-.417.342a.616.616 0 0 1-.298-.06h-.022v.39c.12.049.228.06.396.06Zm3.106-.927h.737V33.27h-.737v3.873Zm2.539.082c.861 0 1.452-.64 1.452-1.469 0-.829-.59-1.468-1.452-1.468-.861 0-1.452.64-1.452 1.468 0 .83.59 1.469 1.452 1.469Zm0-.564c-.455 0-.704-.363-.704-.905 0-.541.249-.91.704-.91.45 0 .704.369.704.91 0 .542-.254.905-.704.905Zm3.019 1.43c.412 0 .769-.097 1.002-.314.206-.19.331-.455.331-.845v-2.568h-.71v.293h-.011c-.168-.233-.422-.369-.77-.369-.703 0-1.202.531-1.202 1.36 0 .84.607 1.327 1.225 1.327.352 0 .563-.14.725-.325h.017v.304c0 .379-.2.58-.618.58-.341 0-.498-.136-.558-.31h-.731c.075.542.541.867 1.3.867Zm-.01-1.706c-.38 0-.63-.276-.63-.748 0-.466.25-.758.624-.758.444 0 .661.346.661.753 0 .412-.19.753-.656.753Zm3.134.84c.861 0 1.452-.64 1.452-1.469 0-.829-.591-1.468-1.452-1.468-.862 0-1.452.64-1.452 1.468 0 .83.59 1.469 1.452 1.469Zm0-.564c-.455 0-.705-.363-.705-.905 0-.541.25-.91.705-.91.449 0 .704.369.704.91 0 .542-.255.905-.704.905Zm1.794.482h.737v-2.779h-.737v2.78Zm0-3.212h.737v-.661h-.737v.66Zm1.212 4.122h.737V36.83h.01c.158.239.412.396.802.396.715 0 1.203-.57 1.203-1.469 0-.867-.471-1.468-1.208-1.468a.972.972 0 0 0-.818.423h-.016v-.347h-.71v3.69Zm1.392-1.44c-.439 0-.672-.331-.672-.835 0-.498.185-.894.645-.894.455 0 .639.368.639.894s-.238.834-.612.834Zm2.83.612c.693 0 1.17-.336 1.17-.894 0-.65-.515-.78-.981-.878-.395-.081-.763-.103-.763-.341 0-.2.189-.31.476-.31.315 0 .504.11.537.407h.666c-.054-.558-.46-.92-1.192-.92-.634 0-1.132.286-1.132.888 0 .606.487.742.986.84.379.075.731.102.731.368 0 .195-.184.32-.509.32-.33 0-.558-.141-.607-.461h-.682c.043.59.493.98 1.3.98Zm3.968-.082v-2.779h-.737v1.604c0 .368-.212.628-.558.628-.314 0-.461-.179-.461-.504v-1.728h-.731v1.853c0 .607.347 1.002.964 1.002.39 0 .607-.146.797-.4h.016v.324h.71Zm.476 0h.737V35.53c0-.369.2-.607.498-.607.271 0 .428.163.428.477v1.744h.737V35.53c0-.369.19-.607.499-.607.271 0 .428.163.428.477v1.744h.737v-1.869c0-.607-.331-.986-.916-.986-.352 0-.645.184-.834.488h-.011a.83.83 0 0 0-.77-.488.908.908 0 0 0-.807.45h-.016v-.374h-.71v2.78Z" fill="#E5708C"></path>  <path d="M118.481 2.149c0-1.183.959-2.143 2.142-2.143h1.429a2.142 2.142 0 0 1 0 4.286h-1.429a2.142 2.142 0 0 1-2.142-2.143ZM58.49 14.29c0 7.888-6.394 14.283-14.283 14.283-7.888 0-14.283-6.395-14.283-14.283C29.924 6.4 36.319.007 44.207.007 52.096.007 58.49 6.4 58.49 14.29Zm-31.352-.071c.79 0 1.436.64 1.357 1.426A14.283 14.283 0 1 1 12.857.007c.785-.08 1.426.568 1.426 1.356V12.79c0 .79.64 1.429 1.429 1.429h11.426ZM78.487 31.43a4.285 4.285 0 1 1 0 8.57h-7.141a4.285 4.285 0 0 1 0-8.57h7.141Zm-4.285-2.857c7.889 0 14.284-6.395 14.284-14.283a14.22 14.22 0 0 0-1.789-6.925l2.36-2.36a2.928 2.928 0 1 0-4.142-4.14l-2.06 2.06A14.22 14.22 0 0 0 74.201.006C66.314.007 59.92 6.4 59.92 14.29c0 7.888 6.395 14.283 14.283 14.283Zm44.279-14.283c0 7.888-6.395 14.283-14.284 14.283-7.888 0-14.283-6.395-14.283-14.283 0-7.89 6.395-14.283 14.283-14.283 7.889 0 14.284 6.394 14.284 14.283Z" fill="url(#gradient_a1234)"></path>  <defs>    <linearGradient id="gradient_a1234" x1="0" y1="16" x2="119" y2="16" gradientUnits="userSpaceOnUse">      <stop class="ccompli1" stop-color="#64C2DB"></stop>      <stop class="ccompli2" offset=".307" stop-color="#7476ED"></stop>      <stop class="ccustom" offset=".604" stop-color="#C994DF"></stop>      <stop class="ccompli1" offset="1" stop-color="#E56F8C"></stop>    </linearGradient>  </defs></svg>

            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>  
</div>
</div>
    </Container>
   
  
  );
}

export default SideNav;