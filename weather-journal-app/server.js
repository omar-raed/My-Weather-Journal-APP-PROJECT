// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require ("express");
// Start up an instance of app
const app = express();
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.

const bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
 const port = 8000;

 const server = app.listen(port, listening)
//server callback function
 function listening (){
     console.log("server running");
     console.log(`running on localHost : ${port}`)
 }

// GET route 

app.get("/all", sendData);
function sendData (req, res){
    res.send(projectData);
};

//POST route 

app.post("/addData", addData);

function addData(req, res){
    console.log(req.body);
    

    projectData["date"] = req.body.date;
    projectData["temperature"] = req.body.temperature;
    projectData["userResponse"] = req.body.userResponse;

    
}



