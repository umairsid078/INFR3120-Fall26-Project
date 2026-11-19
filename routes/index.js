var express = require('express');
var router = express.Router();
var itemStore = require('../models/itemStore');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Campus Finds',
    items: itemStore.getItems()
});
});

/* Show the Report an Item page. */
router.get('/items/new', function(req, res) {
    res.render('new-item');
});

/* Save a new item report. */
router.post('/items', function(req, res) {
    var itemName = req.body.itemName;
    var type = req.body.type;
    var category = req.body.category;
    var location = req.body.location;
    var date = req.body.date;
    var description = req.body.description;

if (!itemName || !itemName.trim() ||
    !type || !category ||
    !location || !location.trim() ||
    !date ||
    !description || !description.trim()) {
        return res.send('Please fill out all fields.');
    }

    var item = {
        itemName: itemName,
        type: type,
        category: category,
        location: location,
        date: date,
        description: description
    };

    itemStore.addItem(item);
    res.redirect('/');
});

module.exports = router;
