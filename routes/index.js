var express = require('express');
var router = express.Router();
var itemStore = require('../models/itemStore');
var Item = require('../models/item');
/* GET home page. */

/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
        // Get the latest 5 reports from MongoDB
        var items = await Item.find().sort({ _id: -1 }).limit(5);

        res.render('index', {
            title: 'Campus Finds',
            items: items
        });
    } catch (err) {
        next(err);
    }
});


/* Show the Report an Item page. */
router.get('/items/new', function(req, res) {
    res.render('new-item');
});


/* Save a new item report. */
router.post('/items', async function(req, res, next) {
    try {
        var itemName = req.body.itemName;
        var type = req.body.type;
        var category = req.body.category;
        var location = req.body.location;
        var date = req.body.date;
        var description = req.body.description;

        // Check that all fields are filled out
        if (!itemName || !itemName.trim() ||
            !type || !category ||
            !location || !location.trim() ||
            !date ||
            !description || !description.trim()) {
            return res.send('Please fill out all fields.');
        }

        // Create a new item using the MongoDB model
        var item = new Item({
            itemName: itemName,
            type: type,
            category: category,
            location: location,
            date: date,
            description: description
        });

        // Save the item to MongoDB
        await item.save();

        // Return to the homepage
        res.redirect('/');

    } catch (err) {
        next(err);
    }
});

module.exports = router;
