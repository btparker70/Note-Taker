var db = require("./db.json");
var fs = require('fs');
const jsonfile = require('jsonfile');
const file = "./db.json"


// Saved notes array
var savedNotes = [];

// Add new note to database
// noteAppender = (reqBody, savedNotes) => {
//         // Reads the db.json contents
//         var dbJSON = jsonfile.readFileSync(file);

//         // Appends it to the db.json
//         dbJSON.push(reqbody);
//         jsonfile.writeFileSync(file, dbJSON);

//         // Returns the updated saved notes array
//         res.json(savedNotes);
// }

module.exports = savedNotes;
// module.exports = noteAppender();