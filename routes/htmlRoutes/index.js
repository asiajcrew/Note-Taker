const path = require("path");
const router = require('express').Router();

// Copy the data from the files in the routes folder and use it to create a new html file called "notes" at the virtual root of the directory (./public).
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// the * symbol is a symbol put in place of any endpoints that have not been defined. (i.e if users attempts to go to "http://localhost:3001/test" then they will be directed to the homepage (./public/index.html or http://localhost:3001/))
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;