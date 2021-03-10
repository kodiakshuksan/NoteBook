// DEPENDENCIES AND VARIABLES

console.log('hello world')

const fs = require('fs');

//file.readFile === fs.readFile 
const path = require('path');

//const { v4: uuidv4 } = require('uuid');

const express = require('express');
//console.log(path)

//const htmlRoutes = require('htmlRoutes');


// Tells node that we are creating an "express" server with properties
const app = express();


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static('public'));


//app.use(express.static(path.join(__filename, 'public')));


// the server is opened on the landing page 
//when the START button is clicked a GET request is made to the new notes page
//the server responds by redirecting user to the /notes page
app.get('/' + PORT + `/public/index.html`), function (req, res) {
    res.sendFile('/' + PORT + '/public/notes.html')
    .catch(error => console.error(error))
};


//write and save post when save button is clicked
app.post(`/` + PORT + `/api/db.json`), (req, res) => {
    //read note title
    //read file to db.json and 
    //write note title to db.json
    //write note title to db.json
    //include ids
};







// // We then display the JSON to the users
// res.json(newNote);
// fs write note to /notes.html



// const path = require('\\NoteBook\\public\\assets\\js\\server.js');
// //const __dirname = NoteBook;
// // ROUTING

// htmlRoutes = (app) => {
//     // => HTML GET Requests
//     // Below code handles when users "visit" a page.
//     // In each of the below cases the user is shown an HTML page of content

//     app.get(`/` + `/public/index.html`, (req, res) => {
//         res.sendFile(path.join(__dirname, './public/index.html'));
//     });

//     app.get(`/` + `/notes.html`, (req, res) => {
//         res.sendFile(path.join(__dirname, `./db/notes.json`));
//     });


//     // landing page/home
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, `./public/index.html`));
//     });
// };

// module.exports = htmlRoutes





// LISTENER
// The below code effectively "starts" my server
app.listen(PORT, () => {
    console.log(`Server started! https://localhost:` + PORT + `/ public / index.html`);
});




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
