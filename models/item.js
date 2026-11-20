var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  itemName:    { type: String, required: true, trim: true },
  type:        { type: String, required: true, enum: ['Lost', 'Found'] },
  category:    { type: String, required: true },
  location:    { type: String, required: true, trim: true },
  date:        { type: String, required: true },
  description: { type: String, required: true, trim: true }
});

module.exports = mongoose.model('item', itemSchema, 'Lost_and_Found');