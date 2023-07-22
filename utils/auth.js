const bcrypt = require('./bcrypt');
const { User } = require('../models'); 

const authenticateUser = async (username, password) => {
  try {
    // Find the user with the given username
    const user = await User.findOne({ where: { username } });

    // If the user doesn't exist, return false
    if (!user) {
      return false;
    }

    // Check if the provided password matches the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the password is incorrect, return false
    if (!isPasswordValid) {
      return false;
    }

    // If the username and password are valid, return the user object
    return user;
  } catch (error) {
    console.error('Error occurred during authentication:', error);
    throw error;
  }
};

module.exports = {
  authenticateUser,
};