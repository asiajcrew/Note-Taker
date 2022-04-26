const router = require('express').Router();
const {createNewNote, updateDb} = require("../../lib/notes");
const { notes } = require("../../db/db.json");

// show all notes in json data
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });

  router.post("/notes", (req, res) => {
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  

  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    updateDb(params, notes);
    res.redirect('');
  });

  module.exports = router;