// Dependencies
var path = require("path");

// Routing
module.exports = function(app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./index.html"));
    });
    
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname + "../../public/notes.html"));
    });

}