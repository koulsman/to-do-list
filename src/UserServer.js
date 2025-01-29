

const User = require('./UserSchema.js')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const URI = 'mongodb+srv://stevekoulas:ZsLFyRO6eq2BhEMv@mytodos.pyikc.mongodb.net/?retryWrites=true&w=majority&appName=MyTODOs';
const URI = 'mongodb+srv://stevekoulas:ZsLFyRO6eq2BhEMv@mytodos.pyikc.mongodb.net/?retryWrites=true&w=majority&appName=MyTODOs';
const axios = require('axios');
const port = 3001;
const bodyParser = require('body-parser');


// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());

 console.log(User, URI)

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
        console.log('MongoDB Connected to users_db!')
        app.listen(port, () => {
            console.log(`Node server is running on port ${port}`);
          });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

//    User.createCollection('User' )
//     .then(() => {
//         console.log('collection created');
//     });
//     User.createCollection().then(function (collection) { 
//         console.log('Collection is created!' ); 
//     });
    // User.createCollection('Users').then(function (collection) { 
    //     console.log('Collection is created!' + collection); 
    // });

