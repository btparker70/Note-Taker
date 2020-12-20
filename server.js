// Dependencies
var express = require('express');
const { get } = require('http');

// Set up express server
var app = express();
var PORT = process.env.PORT || 3000;

// Set up express to handle data parsing
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on port " + PORT);
});