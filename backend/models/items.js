const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemId: {type: Number},
    items:[
        {category:{type:String},
        item_details:[{name: {type: String,required: true},
        price: {type: String,required: true}}]},
    ],
});

const Item = mongoose.model("item",itemSchema);

module.exports = Item;