// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on notes title and notes text

const titleData = require('../data/titleData');
const textData = require('../data/textData');

// ROUTING

module.exports = (app) => {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get('/api/titleData', (req, res) => res.json(titleData));

    app.get('/api/textData', (req, res) => res.json(textData));

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post('/api/titleData', (req, res) => {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        if (titleData.length < 5) {
            titleData.push(req.body);
            res.json(true);
        } else {
            textData.push(req.body);
            res.json(false);
        }
    });

    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post('/api/clear', (req, res) => {
        // Empty out the arrays of data
        titleData.length = 0;
        textData.length = 0;

        res.json({ ok: true });
    });
};
