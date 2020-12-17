var db = require("../db/db.json");
var path = require("path");

// Routing
module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    });
}

