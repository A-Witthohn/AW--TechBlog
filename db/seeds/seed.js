const sequelize = require('../../config/connection'); 
const User = require('../../models/user');
const Post = require('../../models/post');
const Comment = require('../../models/comment');
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    // Truncate data instead of dropping the table
    await User.truncate({ cascade: true });
    await Post.truncate({ cascade: true });
    await Comment.truncate({ cascade: true });

    const users = await User.bulkCreate(userData, { returning: true });
    const posts = await Post.bulkCreate(postData, { returning: true });
    const comments = await Comment.bulkCreate(commentData, { returning: true });

    console.log('Database seeding complete.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    sequelize.close();
  }
}

seedDatabase();