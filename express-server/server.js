const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send('API works');
});
// Serve static files from the dist directory
app.use(express.static(process.cwd()?.replace("express-server", "") + '/angular-app/dist/angular-app/'));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(process.cwd()?.replace("express-server", "") + '/angular-app/dist/angular-app/index.html');
});

// Set the port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});