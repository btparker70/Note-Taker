var db = require("../db/db.json");
var path = require("path");
var savedNotes = require("../db/store");
var fs = require('fs');
const jsonfile = require('jsonfile');
const file = "./db/db.json";

// const saveWriter = require("../db/store");

// Routing
module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });

    app.post("/api/notes", function (req, res) {
        // Adds the note text to the saved note array
        savedNotes.push(req.body);

        // This reads the db.json contents
        var dbJSON = jsonfile.readFileSync(file);
        dbJSON.push(req.body);
        jsonfile.writeFileSync(file, dbJSON);
        res.json(savedNotes);
    })
}



// POST /api/notes - Should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client.
