const mongoose = require('mongoose')
//This is for the mlab
if (process.env.NODE_ENV === 'production') {
    mongoose.connect(process.env.MLAB_URL);
  } else {
    mongoose.connect('mongodb://localhost/moviebloger', { useNewUrlParser: true });
  }
  //this is giving me an error when i do() module.exports = mongoose.Promise = Promise;)I am not sure why
mongoose.Promise = Promise;
module.exports = mongoose;
