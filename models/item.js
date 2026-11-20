var mongoose = require('mongoose');
// Import Mongoose, which allows us to work with MongoDB


var itemSchema = new mongoose.Schema({
  // Create a schema that defines the structure of an item
// This determines what information must be stored for each item



  itemName:    { type: String, required: true, trim: true },    // trim: true removes extra spaces from the beginning and end
  type:        { type: String, required: true, enum: ['Lost', 'Found'] },   // enum restricts the value to either 'Lost' or 'Found'
  category:    { type: String, required: true },
  location:    { type: String, required: true, trim: true },
  date:        { type: String, required: true },
  description: { type: String, required: true, trim: true }
});


// 'item' is the model name used throughout the application
// itemSchema defines the structure of each item
// 'Lost_and_Found' is the MongoDB collection where items are stored

module.exports = mongoose.model('item', itemSchema, 'Lost_and_Found');