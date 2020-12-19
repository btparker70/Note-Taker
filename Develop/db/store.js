// Dependencies
var db = require("./db.json");
const jsonfile = require('jsonfile');

// Saved notes array
var savedNotes = [];

// Add new note to database
noteAppender = (reqBody, savedNotes, file, res) => {
        // Reads the db.json contents
        var dbJSON = jsonfile.readFileSync(file);

        // Adds an id number
        reqBody.id = dbJSON.length;

        // Appends it to the db.json
        dbJSON.push(reqBody);

        // Rewrites the db.json file
        jsonfile.writeFileSync(file, dbJSON);

        // Returns the updated saved notes array
        res.json(savedNotes);
}

// Deletes note from db
noteDeleter = (savedNotes, file, req, res) => {
    // Reads the db.json contents
    var dbJSON = jsonfile.readFileSync(file);

    // Get the value of the 'id' key selected
    var id = req.param("id");

    // Remove that entire element from the db array
    dbJSON.splice(id, 1);

    // Rewrites the db.json file
    jsonfile.writeFileSync(file, dbJSON);

    // Returns the updated saved notes array
    res.json(savedNotes);
}

module.exports = savedNotes;
// module.exports = noteAppender();


// const file = "./db.json"
// var fs = require('fs');