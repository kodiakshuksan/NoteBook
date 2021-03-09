// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
var bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// res.type('.html')
// // => 'text/html'
// res.type('html')
// // => 'text/html'
// res.type('json')
// // => 'application/json'
// res.type('application/json')
// // => 'application/json'
// res.type('png')
// => 'image/png'
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.


// // respond with "hello world" when a GET request is made to the new notes page
app.get(`http://localhost:` + PORT + `/public/index.html`), function (req, res) {
    res.send("hello")
    console.log(`http://localhost:` + PORT + `/public/index.html`)
};


app.get(`http://localhost:` + PORT + `/public/notes.html`), function (req, res) {
    res.send(`http://localhost:` + PORT + `/public/notes.html`)
}

app.put(`/` + PORT + `/api/db.json`), (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newNote = req.body;

    console.log(newNote);

    // We then add the json the user sent to the character array
    notes.push(newNote);

    // We then display the JSON to the users
    res.json(newNote);
};

app.post(`/` + PORT + `/api/db.json`), (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newNote = req.body;

    console.log(newNote);

    // We then add the json the user sent to the character array
    notes.push(newNote);

    // We then display the JSON to the users
    res.json(newNote) + `/notes.html`;
};


//require('./routes/apiRoutes')(app);
//require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" my server
app.listen(PORT, () => {
    console.log(`Server started! At http://localhost:` + PORT + `/ public / index.html`);
});


//create SERVER REQUESTS



//TO DO: CREATE ROUTES//
//ROUTES-HTML
// GET /notes should return the notes.html file.

// GET * should return the index.html file.



//ROUTES-FROM DB.JSON FILE
// GET /api/notes should read the db.json file and return all saved notes as JSON.


// POSTS REQUESTS
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).










// GIVEN a note-taking application
// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page
// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column



// The following HTML routes should be created:

// GET /notes should return the notes.html file.

// GET * should return the index.html file.

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

// Bonus
