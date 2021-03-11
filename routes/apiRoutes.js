// // LOAD DATA
// // linking our routes to my "data" source

// module.exports = (app) => {
//     // API GET Requests
//     // Below code handles when users "visit" a page.
//     // In each of the below cases when a user visits a link
//     // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//     // ---------------------------------------------------------------------------
//     const path = require('path');
//     //const noteArrayFile = require('/db/db');
//     const note = { "title": "jenny", "text": "Happy", "id": "uuid()" }



//     //const noteData = require('./public/notes.html');


//     const file = '/api/db.json';


//     app.get('/', function (req, res) {
//         res.sendFile(path.join(__dirname + '/public/index.html'))

//     });

//     app.get('/api/notes', (req, res) => res.json());



//     // This is a  GET request returns notes from db.json

//     app.get('/api/notes', (req, res) => res.json(userInputArr));



//     function storeNewNote(note) {

//         let newNotePage = fs.readFileSync("db/db.json", "utf-8");
//         notesJSON = JSON.parse(newNotePage)
//         const addUserNewNote = notesJSON;
//         fs.writeFile("db/db.json", note, (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("Finished writing");
//             }
//         });
//     }
//     //  This is a POST request to add notes to db.json file

//     app.post('/api/notes', (req, res) => {
//         const newNote = req.body;
//         console.log(req.body);
//         userNewNote.push(newNote);
//         console.log("POST request Started");
//         console.log(tempArray);
//         storeNewNote(JSON.stringify(userNewNote));
//         res.json(req.body);
//     });


//     app.post('/api/notes', (req, res) => {
//         res.sendFile(path.join(__dirname + '/public/notes.html'))
//     });


//     app.post('/api/clear', (req, res) => {
//         // Delete users notes
//         userNewNotes.length = 0;

//         res.json({ ok: true });
//     });
// };


