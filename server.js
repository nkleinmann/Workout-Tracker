const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect( process.env.MONGODB_URI , 
  { useNewUrlParser: true,
  useUnifiedTopology: true })
  // used this resource to connect atlas https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369

.then(() => {
  console.log("MongoDB Connected...")
}).catch(err => console.log(err));

// immediately invokes function
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });