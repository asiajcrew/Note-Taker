const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());
// Make linked files/ assets (i.e. css, js scripts, etc.) available when loading the html in the browser (this illiminates the need for individual GET requests.)
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

  // ^^ This is basically what the server.js file should always look like (lines 1- 19)