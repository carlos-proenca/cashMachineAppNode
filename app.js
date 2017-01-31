//Express dependencies
const express    = require("express");
const Path       = require('path');
const bodyParser = require('body-parser');


//App dependencies
const Server = require("./config/Server");
const Routes = require("./api/routes/Routes");

//Create a App
let app = express();

//Configure App
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(Path.join(__dirname, 'public')));
app.use(Routes);

//Start the App Server
new Server(app);

module.exports = app;
