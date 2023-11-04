const mongoose = require('mongoose');

const stationarySchema = new mongoose.Schema({
    stationaryId: {type: Number},
    name: {type: String,required: true},
    email: {type: String,required: true,},
    password: {type: String,required: true,},
    Contact: {type: Number,required: true},
});

const Stationary = mongoose.model("stationary",stationarySchema);

module.exports = Stationary;