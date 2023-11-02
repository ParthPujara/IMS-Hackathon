const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  uid: {
    type: int,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  department:{
    type:String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

userSchema.methodes.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.uid }, process.env.JWTPRIVATEKEY, {
    expiresIn: "1d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: passwordComplexity().required(),
    department: joi.string().required(),
    contact: joi.number().min(10).max(10).required(),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
