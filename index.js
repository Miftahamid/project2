const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "hbs");


app.use(require("./routes/index.js"));

app.listen(4000, () =>{
    console.log("I am listening in 4000 ...")
})