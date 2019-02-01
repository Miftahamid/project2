const express = require("express");
const hbs = require("hbs");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

const app = express();

app.use(flash());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "MIFTA-IS-AWESOME",
    saveUninitialized: true,
    resave: false
  })
);


require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());


hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));



app.use(require("./routes/index.js"));

app.listen(3000, () => console.log(" I am running on 4000 hey yall"));
