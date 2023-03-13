//create collection in mongodb
const mongoose = require('mongoose');


const ImageDetailScehma = new mongoose.Schema(
 {
    image: String,
    data: Buffer,
 },
 {
    collection: "ImageDetails",
  }
);

mongoose.model("ImageDetails", ImageDetailScehma);