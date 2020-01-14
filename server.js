console.log("Hello moto");
// Dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//You know, defining the port.
const PORT = process.env.PORT || 8081;

// Express and Middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Routing
require("./routes/blogRoutes")(app);
require("./routes/hexRoutes")(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/maptheblank", { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});