// Dependencies
var express = require('express');
const { get } = require('http');
var path = require('path');

// Set up express
var app = express();
var PORT = process.env.PORT || 3000;

// Set up express to handle data parsing
app.use(express.urlencoded({ extend: true}));
app.use(express.json());

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../../notes.html"));
});

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../../../db/db.json"));
    // return res.json(notes);
})

// Posting
app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    
})

// Start the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
});