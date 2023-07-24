const express = require('express');
// Import the session middleware
const session = require('./config/session');
const exphbs = require('express-handlebars');
const authController = require('./controllers/authController');
const auth = require('./utils/auth'); // Import the auth middleware
const bcrypt = require('bcrypt');



const app = express();

// Use the session middleware
app.use(session);
app.use(express.static('public'));
// ... Other middleware and routes ...

//setup handlebars 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
});


// Render dashboard 
app.get('/dashboard', (req, res) => {
  res.render('dashboard'); 
});

// Render login 
app.get('/login', (req, res) => {
  res.render('login'); 
});

// Render signup 
app.get('/signup', (req, res) => {
  res.render('signup'); 
});

// Render individual post 
app.get('/post/:postId', (req, res) => {
  const postId = req.params.postId;
  res.render('post', postData); 
});

// Handle login route
app.post('/login', authController.login);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}. Check it out here "http://localhost:${PORT}"!`);
});