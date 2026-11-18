var items = [];

// Add a new report to the list
function addItem(item) {
    items.push(item);
}

// Return all the reports
function getItems() {
    return items;
}

module.exports = {
    
    addItem: addItem,
    getItems: getItems
};
