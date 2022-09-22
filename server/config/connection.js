const mongoose = require('mongoose');
//here we make the connection
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/zoom-project-directory',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;