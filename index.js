//list of dependencies
const express = require('express');
const app = express();
const flash = require('connect-flash');
const hbs = require('hbs');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const parser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes/user');
const methodOverride = require('method-override');
const multer = require('multer');
 
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(parser());
app.use(express.static(__dirname + '/public/photo-storage'));
app.use(express.static(__dirname + '/public'));

app.use(parser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

app.use(session({ secret: 'Mifta-Project' }));
app.use(flash());

require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use(routes);

// app.set('port', process.env.PORT || 4000);

app.listen(4000, () => 
   console.log('server is running on port 4000'));
