const router = require('express').Router();
const {Employee,validate} = require('../models/employee');
const bcrypt = require('bcrypt');

router.post("/addEmp",async(req,res)=>{
    try {
        const {error} = validate(req.body);
        if(error){
            return res.status(400).json({message:error.details[0].message});
        }
        const user = await Employee.findOne({email:req.body.email});
        if(user){
            return res.status(409).json({message:"user with given email is already exist!"});
        }
        const hashPassword = await bcrypt.hash(req.body.password,10);
        await new Employee({...req.body,password:hashPassword}).save()
        .then(()=>{
            res.status(200).json({message:"Registered Successfully!"})
        })
    } catch (error) {
        return res.status(500).json({message:`error occured: ${error}`});  
    }
});

module.exports = router;