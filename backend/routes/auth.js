const router = require('express').Router();
const {Employee} = require('../models/employee');
const bcrypt = require('bcrypt');

router.get("/login",async(req,res)=>{
    try {
        const user = await Employee.findOne({email:req.body.email});
        if(!user){
            return res.status(409).json({status:409,message:"Invalid Email or Password!"});
        }

        const validPassword = await bcrypt.compare(req.body.password,user.password);
        if(!validPassword){
            return res.status(409).json({message:"Invalid Email or Password!"});
        }

        const token = user.generateAuthToken();
        res.status(200).json({token:token,role:user.role,});
    } catch (error) {
        res.status(500).json({message:`error occured: ${error}`});  
    }
});

module.exports = router;