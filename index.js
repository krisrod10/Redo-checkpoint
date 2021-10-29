let express = require("express");
let app = express();
let dotenv = require("dotenv").config();
let mysql = require("./db/db");



let port = process.env.PORT
app.listen(port, () => {
    console.log("Listening on port", port);
});

