// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
const port = 8000;
// Setup Server
const server = app.listen(port, listening);

function listening() {
  console.log(`runnnig on localhost:${port}`);
}

//post route
// app.post('/api', (request, response) => {
//   console.log(request.body);
// });

app.post('/add', addData);

function addData(req, res) {
  console.log(req.body);
  newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content,
  };
  projectData = newEntry;
  res.send(projectData);
  console.log(projectData);
}

app.get('/all', sendData);

function sendData(req, res) {
  res.send(projectData);
}
