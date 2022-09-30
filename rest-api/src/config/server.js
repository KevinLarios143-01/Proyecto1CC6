const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.set("port", 3000);
module.exports = app;