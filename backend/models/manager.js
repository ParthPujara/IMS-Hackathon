const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    managerId: {type: Number},
    departmentId: {type: Number,required: true},
    name: {type: String,required: true},
    Contact: {type: Number,required: true},
    name:{type: String,required: true},
    name:{type: String,required: true},
});

const Manager = mongoose.model("manager",managerSchema);

module.exports = Manager;