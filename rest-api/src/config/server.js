const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
dotenv.config()
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

const puerto=process.env.PORT||3000;

app.set("port", puerto);
module.exports = app;