const router = require('express').Router();
let db = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes');

// show all notes in json data
router.get('/notes', (req, res) => {
  if (db.notes) {
    notes = db.notes
  }
    res.json(notes);
});

// POST a new note
router.post('/notes', (req, res) => {
  const postNote = req.body
  postNote.id = notes.length.toString();
  const note = createNewNote(req.body, notes)
  res.json(note);
});

module.exports = router;