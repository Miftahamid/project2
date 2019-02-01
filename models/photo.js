// const mongoose = require('../db/connection');
// const Schema = mongoose.Schema;

// const Comment = new Schema({
//   content: String,
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//   author: {
//     type: Schema.Types.ObjectId,
//     type: String,
//     ref: 'User',
//     default: 'hello world'
//   }
// });

// const Photo = new Schema({
//   path: String,
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: 'User'
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//   comments: [Comment]
// }); const multerConfig = {
  storage: multer.diskStorage({
    //Setup where the user's file will go
    destination: function (req, file, next) {
      console.log('hit destination');
      next(null, './public/photo-storage');
    },

    //Then give the file a unique name
    filename: function (req, file, next) {
      console.log('file: ', file);
      console.log('originalname: ', file.originalname);
      const ext = file.mimetype.split('/')[1];
      next(null, file.originalname);
    }
  }),
  //A means of ensuring only images are uploaded.
  fileFilter: function (req, file, next) {
    if (!file) {
      next();
    }

    const image = file.mimetype.startsWith('image/');
    if (image) {
      console.log('photo uploaded');
      next(null, true);
    } else {
      console.log('file not supported');

      //TODO:  A better message response to user on failure.
      return next();
    }
  }
};
//img upload

router.post('/upload', multer(multerConfig).single('photo'), (req, res) => {
  console.log(req.file);
  Photo.create({
    path: req.file.originalname,
    author: req.user._id
  }).then(photo => {
    req.user.photos.push(photo);
    req.user.save(err => {
      res.render('user');
    });
  });
});

// create a comment
router.put('/:id', (req, res) => {
  let { content } = req.body;
  Photo.findById({ _id: req.params.id }).then(photo => {
    photo.comments.push({
      content,
      author: req.user_id
    });
    photo.save(err => {
      res.redirect('index');
    });
  });
});

// module.exports = {
//   Photo: mongoose.model('Photo', Photo),
//   Comment: mongoose.model('Comment', Comment)
// };
