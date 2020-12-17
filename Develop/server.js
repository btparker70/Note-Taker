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
// app.use("/api", apiRoutes);

// Routes

require("./routes/htmlRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on port " + PORT);
});





//Posting
// app.post("/api/notes", function (req, res) {
//     var newNote = req.body;
//     res.join(newNote);

//     // Test
//     let obj = {
//         table: []
//     };
//     obj.table.push({title: 1, text: 1});
//     var json = JSON.stringify(obj);

//     fs.readFile("../../../db/db.json", 'utf8', function readFileCallback(err, data){
//         if (err){
//             console.log(err);
//         } else {
//         obj = JSON.parse(data); //now it an object
//         obj.table.push({id: 2, square:3}); //add some data
//         json = JSON.stringify(obj); //convert it back to json
//         fs.writeFile("../../../db/db.json", json, 'utf8', callback); // write it back 
//     }});
// })



// need a store.js file for reading/writing the json/db

// have 2 routes one for notes one for api calls
//in server file, reference both route files