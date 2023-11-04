const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const employeeSchema = new mongoose.Schema({
  empId: {type: Number},
  departmentId: {type: mongoose.Schema.Types.ObjectId,ref:"department",},
  name: {type: String,required: true,},
  email: {type: String,required: true,},
  password: {type: String,required: true,},
  contact: {type: String,required: true,},
  role: {type: String,required: true,},
});

employeeSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.uid }, process.env.JWTPRIVATEKEY, {
    expiresIn: "1d",
  });
  return token;
};

const Employee = mongoose.model("employee", employeeSchema);

const validate = (data) => {
  const schema = joi.object({
    // emp_id: joi.string().required(),
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: passwordComplexity().required(),
    departmentId: joi.number().required(),
    contact: joi.number().min(10).required(),
    role: joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { Employee, validate };
