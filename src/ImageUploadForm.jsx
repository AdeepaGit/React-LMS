import React, { useState } from 'react';
import axios from 'axios';
import { Colors } from 'chart.js';

function ImageUploadForm() {
    const[image,setImage]=useState("");
  function convertToBase64(e){
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{ 
        console.log(reader.result);//base64encoded string
        setImage(reader.result);
    };
    reader.onerror = error =>{
        console.log("Error: ",error);
    };
  }
  function uploadImage(){
    fetch("http://localhost:5000/upload-image", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
           base64 : image
        })
        }).then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status === "OK") {
        
            alert("Image Upload Successfully");
           
          } else {
            alert("Something went wrong");
          }
        });
    
  }
  return (
    <div className='auth-wrapper align-item-center' style={{textAlign: "center"}}>
    <h3>Achini Fernando</h3>
    <div className='auth-inner' style={{width:"auto"}}>
        {image=="" || image==null?"": <img width={160} height={160}  src={image} style={{borderRadius: "50%" , border:"2px solid #6b8ece"}}/>} <br/>
        <input accept="image/" type="file" onChange={convertToBase64} style={{marginLeft:"80px"}} /><br />
        <h5>Student Id: 0000123</h5>
        <h5>Department</h5>
        <button className="btn btn-secondary btnn" onClick={uploadImage}>Upload</button>
    </div>



    </div>
  );
}
export default ImageUploadForm;