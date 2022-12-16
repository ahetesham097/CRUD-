const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path")

const app = express();

// log request
app.use(morgan("tiny"));

// parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}));

// set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname,"views/ejs"));

// load assets
app.use("/css",express.static(path.resolve(__dirname,"assets/css")))
app.use("/img",express.static(path.resolve(__dirname,"assets/img")))
app.use("/js",express.static(path.resolve(__dirname,"assets/js")))

// load routers

app.use('/', require('./server/routes/router'))

app.listen(3000,function(){
    console.log("Server is running on http://localhost:3000")});