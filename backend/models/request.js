const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    requestId: {type: Number},
    empId: {type: mongoose.Schema.Types.ObjectId,ref:"employee"},
    departmentId: {type: mongoose.Schema.Types.ObjectId,ref:"manager"},
    items:[{
        name: {type: String,required: true},
        price: {type: Number,required: true},
        quentity: {type: Number,required: true},
    }],
    status: {type: String,required: true},
});

const Request = mongoose.model("request",requestSchema);

module.exports = Request;