// server.js
const express = require('express');
const session = require('./config/session'); // Import the session middleware
const app = express();

// Use the session middleware
app.use(session);

// ... Other middleware and routes ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}. Check it out here http://localhost:${PORT} !`);
});

