// Dependencies
const express = require('express');

// Use express app
const app = express();

// Creating environment variable port
const PORT = process.env.PORT || 3001;

// Get express to create route for all the files in the 'public' folder
app.use(express.static('public'));
// Express app can parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes to route files
require('./routes/homeRoutes');
require('./routes/api/apiRoutes');

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
