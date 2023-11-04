const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    managerId: {type: Number},
    departmentId: {type: mongoose.Schema.Types.ObjectId,ref:"department"},
    name: {type: String,required: true},
    email: {type: String,required: true,},
    password: {type: String,required: true,},
    Contact: {type: Number,required: true},
});

const Manager = mongoose.model("manager",managerSchema);

module.exports = Manager;