const router = require('express').Router();
const path = require('path');

// Import our modular routers for /tips and /feedback
const notesRouter = require('./apiRoutes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;
