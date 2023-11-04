const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    departmentId: {type: Number},
    name:{type:String},
});

const Department = mongoose.model("department",departmentSchema);

module.exports = Department;