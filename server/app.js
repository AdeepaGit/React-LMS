const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET ="hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
//connect mongodb
const mongoUrl = "mongodb+srv://admin:123@cluster0.guczoiv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser: true
}).then(()=>{console.log("Connected to database");})
.catch(e=>console.log(e));

app.listen(5000,()=>{
    console.log("Server Started");
});
require("./userDetails");
const User = mongoose.model("UserInfo"); //create model
require("./student");
const Student = mongoose.model("StudentInfo");
require("./imageDetails");
const Images = mongoose.model("ImageDetails");

//create post method to register user
app.post("/register",async(req,res)=>{
    const{fname,lname,uname,email,pass,cpass}=req.body;
    const encryptedPassword = await bcrypt.hash(pass, 10);
    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) {
          return res.json({ error: "User Exists" });
        }
        if(pass!=cpass){
          return res.json({ error: "Not Match Confirm Password" });
        }
        await User.create({
            fname,
            lname,
            uname,
            email,
            pass : encryptedPassword,
            cpass : encryptedPassword
          });
          res.send({status:"OK"});
    } catch (error) {
        res.send({status:"Error"});
    }
            
});

//create post method to profile

app.post("/student",async(req,res)=>{
  const{fname,
    lname,
    dob,
    mobile,
    email}=req.body;
 
  try {
     
      await Student.create({
          fname,
          lname,
          dob,
          mobile,
          email
          
        });
        res.send({status:"OK"});
  } catch (error) {
      res.send({status:"Error"});
  }
 
         
});


//create post method in login user

app.post("/login-user", async (req, res) =>{
    const { uname, pass } = req.body;
    const user = await User.findOne({ uname });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(pass, user.pass)){
        const token = jwt.sign({ uname: user.uname }, JWT_SECRET, {
            expiresIn: "15m",
          });
        if (res.status(201)) {
            return res.json({ status: "OK", data: token });
          } else {
            return res.json({ error: "error" });
          }
    }
    res.json({ status: "error", error: "Invalid Password" });
});


//craete post method to very user and asign tokens
app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return "token expired";
        }
        return res;
      });
      console.log(user);
      if (user == "token expired") {
        return res.send({ status: "error", data: "token expired" });
      }
  
      const username = user.uname;
      User.findOne({ uname: username })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) { }
  });
//create post method to upload image
  app.post("/upload-image",async(req,res)=>{
    const{base64}=req.body;
   
    try {
        Images.create({image:base64});

          res.send({status:"OK"});
    } catch (error) {
        res.send({status:"Error",data:error});
    }
   
           
});


 