let express = require("express");
let app = express();
let dotenv = require("dotenv").config();
let mysql = require("./db/db");



app.get("/", function(req, res){
    console.log('this app is working');
    res.json("Is my app working?")
})

let port = process.env.PORT
app.listen(port, () => {
    console.log("Listening on port", port);
});

