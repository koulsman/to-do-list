const uri = 'mongodb+srv://stevekoulas:asfalisa1@cluster0.pyikc.mongodb.net/MyTODOs_db?retryWrites=true&w=majority';
const port = 3002;
const axios = require("axios")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser");


const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
const List = require("./ListSchema");

console.log("ok")

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB Connected to list_db!');
    app.listen(port, () => {
      console.log(`Node server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB connection error:', error);
  });


app.post('/list', async(req,res) => {
    const list = new List({
    
        list_title: req.body.title,
        u_id: req.body.uid,
        list_items: req.body.listItems,
        list_isDone: req.body.isDone
      });
    
      try {
      
      
        
        const newList = await list.save();
        console.log("user saved!")
        res.status(201).json(newList); // Send created user as a response
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    // {list_title, list_items, u_id}