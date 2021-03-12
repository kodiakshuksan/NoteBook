//include packages
const express = require('express');
const fs = require('fs');

var app = express();
var path = require("path");

var PORT = process.env.PORT || 3001;

// makes Express to parsing and file sending
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



//Create Routes
app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname, "/public/index.html"));
})

// GET /notes route to return notes.html file
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})


// Sends JSON data as a response
app.get("/api/notes", function (req, res) {
    const notes = JSON.parse(getJSONData());
    res.json(notes);
});

// Create a new note
app.post("/api/notes", function (req, res) {
    const notes = JSON.parse(getJSONData());
    notes.push(req.body);
    const assignedNotes = assignUniqueIds(notes);
    writeToJSON(assignedNotes);
    res.json(true);
});

// Delete 
app.delete("/api/notes/:id", function (req, res) {
    const chosenId = parseInt(req.params.id);
    const notes = JSON.parse(getJSONData());
    const filteredNotes = notes.filter(note => parseInt(note.id) !== chosenId);
    writeToJSON(filteredNotes);
    res.json(true);
});

// Stores notes to db.json
const writeToJSON = (notes) => {
    let data = JSON.stringify(notes, null, 4);
    fs.writeFile("./db/db.json", data, (err) => {
        if (err) throw err;
    });
}

// Returns data from db.json
const getJSONData = () => fs.readFileSync("./db/db.json");

//  unique id 
const assignUniqueIds = array => {
    const copyArray = [...array];
    for (let i = 0; i < copyArray.length; i++) {
        copyArray[i].id = i + 1;
    }
    return copyArray;
}


//GET / route to return index.html file
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})



//listening for server response
app.listen(PORT, () => console.log("App listening on PORT " + PORT));

