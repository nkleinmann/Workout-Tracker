const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect( process.env.MONGODB_URI , 
  { useNewUrlParser: true,
  useUnifiedTopology: true })
  // used this resource to connect atlas https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369
// process.env.MONGODB_URI || "mongodb://localhost/populatedb"
.then(() => {
  console.log("MongoDB Connected...")
}).catch(err => console.log(err));

// Go through code/ discuss plan and how to set up mongoose using atlas (have been using mongodb locally)







// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });