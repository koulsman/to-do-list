const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  list_id: String,
  list_items: Array,
  isDone: {type: Boolean , default: false}
}, { 
    collection: 'lists' // Specify the collection name explicitly
  });

const Lists = mongoose.model('lists', UserSchema);
console.log("database:MyTODOs_db, collection:lists")
module.exports = Lists;