// Import modules
const router = require('express').Router();
const data = require('../db/db.json');
const { createNote, deleteNote } = require('../middleware/helpers');

// Get all saved notes
router.get('/notes', (req, res) => {
    res.send(data);
});

// Show where the api at bby
router.get('/', (req, res) => {
    res.send(`Here's the API bby cakes`);
});

// POST a new note to the db
router.post('/notes', (req, res) => {
    createNote(req.body);
    res.json();
});

// Delete a note by id from the db
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params);
    res.json();
});

module.exports = router;
