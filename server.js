// DEPENDENCIES AND VARIABLES

console.log('hello world')

const fs = require('fs');


const path = require('path');


const uuid = require('uuid');



const express = require('express');


// Tells node that we are creating an "express" server with properties
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
//const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));



//require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// LISTENER
// The below code effectively "starts" my server
app.listen(PORT, () => {
    console.log(`Server started! https://localhost:` + PORT + `/ public / index.html`);
});









