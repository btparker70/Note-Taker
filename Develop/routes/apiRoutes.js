var db = require("../db/db.json");

// Routing
module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });
}


// module.exports = function(app) {


// // Routes
// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../../index.html"));
// });

// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "../../notes.html"));
// });

// app.get("/api/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "../../../db/db.json"));
//     // return res.json(notes);
// });

// // Start the server to begin listening
// app.listen(PORT, function () {
//     console.log("App listening on port " + PORT);
// });

// }