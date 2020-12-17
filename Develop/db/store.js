var db = require("./db.json");
var fs = require('fs');
const jsonfile = require('jsonfile');
const file = "./db.json"


// temp note array
var savedNotes = [];
// var obj = {
//     table: []
// };
// saves note to db
// saveWriter = () => {
//     obj.table.push(noteArr);
//     console.log(obj);
    // var json = JSON.stringify(obj);

    // fs.appendFile("./db.json", json, function (err) {
    //     if (err) throw err;
    //     console.log('Saved!' + obj.noteArr);
    //   });
// }

module.exports = savedNotes;
// module.exports = saveWriter();