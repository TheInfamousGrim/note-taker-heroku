// Dependencies
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/htmlRoutes');

// Creating environment variable port
const PORT = process.env.PORT || 3001;

// Use express app
const app = express();

// Import custom middleware, 'clog'
app.use(clog);

// Express app can parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Get express to create route for all the files in the 'public' folder
app.use(express.static('public'));

// GET Route for the homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// GET Route for notes page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
