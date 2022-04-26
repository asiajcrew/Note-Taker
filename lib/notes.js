const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  const createNote = body
  notesArray.push(createNote);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return createNote;
};

module.exports = {
  createNewNote,
};



