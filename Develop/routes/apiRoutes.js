var db = require("../db/db.json");
var path = require("path");
var savedNotes = require("../db/store");
var fs = require('fs');
const jsonfile = require('jsonfile');
// const noteAppender = require("../db/store");
const file = "./db/db.json";


// Routing
module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });

    app.post("/api/notes", function (req, res) {
        // Reads the db.json contents
        var dbJSON = jsonfile.readFileSync(file);

        // Adds an id number
        req.body.id = dbJSON.length;

        // Appends it to the db.json
        dbJSON.push(req.body);

        // Rewrites the db.json file
        jsonfile.writeFileSync(file, dbJSON);

        // Returns the updated saved notes array
        res.json(savedNotes);
    });

    app.delete("/api/notes/:id", function (req, res) {
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
    })
}



// POST /api/notes - Should receive a new note to save on the request body, 
// add it to the db.json file, and then return the new note to the client.


// app.post("/api/notes", function (req, res) {
//     // Adds the note text to the saved note array
//     savedNotes.push(req.body);
//     console.log(savedNotes);
//     // Reads the db.json contents
//     var dbJSON = jsonfile.readFileSync(file);
//     console.log(dbJSON);
//     // Appends it to the db.json
//     dbJSON.push(req.body);
//     jsonfile.writeFileSync(file, dbJSON);

//     // Returns the updated saved notes array
//     res.json(savedNotes);
// });