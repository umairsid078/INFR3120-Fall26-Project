var express = require('express');
var router = express.Router();
var Item = require('../models/item');

router.get('/', async function(req, res, next) {
  try {
    var items = await Item.find().sort({ _id: -1 });
    res.render('listing', { title: 'Lost and Found Listings', items: items });
  } catch (err) {
    next(err);
  }
});

module.exports = router;