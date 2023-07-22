// authController.js
const auth = require('../utils/auth');
const bcrypt = require('bcrypt');

// Login user
exports.login = async (req, res) => {
  try {
    // Authenticate the user using the auth.authenticateUser middleware
    const authenticated = await auth.authenticateUser(req.body.username, req.body.password);

    if (authenticated) {
      // If the authentication is successful, set the user in the session
      req.session.user = { username: req.body.username };
      res.redirect('/dashboard'); // Redirect to the dashboard page after successful login
    } else {
      res.render('login', { error: 'Invalid credentials' }); // Render login with error message
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.render('login', { error: 'An error occurred during login' }); // Render login with error message
  }
};