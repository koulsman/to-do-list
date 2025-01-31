const uri = 'mongodb+srv://stevekoulas:asfalisa1@cluster0.pyikc.mongodb.net/MyTODOs_db?retryWrites=true&w=majority';
const port = 3002;
const axios = require("axios")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser");


const app = express();

const Lists = require("./ListSchema");

console.log("ok")


app.post("/list", {title, listItems})
