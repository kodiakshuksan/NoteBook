
//require needed files
const path = require('path');



const htmlLinks = (app) => {
    // => HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content

    app.get('http://127.0.0.1:5500/public/notes.html', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('http://127.0.0.1:5500/public/index.html', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // If no matching route is found default to home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};

module.exports = htmlLinks;