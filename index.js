const express = require("express")
const BodyParser = require("body-parser")
const mongoose = require ("mongoose")
const Movie = require("./models/Movie")


const app = express()




app.listen(4000, () =>{
    console.log("I am listening in 4000 ...")
})