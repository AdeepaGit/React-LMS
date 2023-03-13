const mongoose = require('mongoose');

const StudentScehma = new mongoose.Schema(
 {

    fname:String,
    lname:String,
    dob:String,
    mobile:String,
    email:String
    
 },
 {
    collection: "StudentInfo",
  }
);

mongoose.model("StudentInfo", StudentScehma);