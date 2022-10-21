// Dependencies
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/helpers');
const html = require('./routes/htmlRoutes');
const api = require('./routes/apiRoutes');

// Creating environment variable port
const PORT = process.env.PORT || 3001;

// Use express app
const app = express();

// Import custom middleware, 'clog'
app.use(clog);

// Express app can parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get express to create route for all the files in the 'public' folder
app.use(express.static('public'));

// Home page routes
app.use('/', html);
// Api routes
// app.use('/api', api);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
