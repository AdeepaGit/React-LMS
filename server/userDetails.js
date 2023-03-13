//create collection in mongodb
const mongoose = require('mongoose');

const UserDetailsScehma = new mongoose.Schema(
 {
    fname:String,
    lname:String,
    uname: String,
    email :{ type: String, unique: true },
    pass :String,
    cpass :String
 },
 {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);