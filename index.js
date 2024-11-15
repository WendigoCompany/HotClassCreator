require("dotenv").config()
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./src/routes");
const path = require("path");



const app  = express();
const PORT = 3000;


app.use(cors())
app.use(bodyParser.json())
app.use(router)
app.use(express.static(path.join(__dirname, "/public")))

app.listen(PORT, ()=>{
    console.log("APP UP!");
    console.log(`http://localhost:${PORT}/`);
    
})