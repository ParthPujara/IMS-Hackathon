const router = require('express').Router();
const {User,validate} = require('../models/user');
const bcrypt = require('bcrypt');

router.post("/register",async(req,res)=>{
    try {
        const {error} = validate(req.body);
        if(error){
            return res.status(400).json({message:error.details[0].message})
        }
        const user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(409).json({message:"user with given email is already exist!"})
        }
        const hashPassword = await bcrypt.hash(req.body.password,10);
        await new User({...req.body,password:hashPassword}).save().then(
            res.status(200).json({message:"Registered Successfully!"})
        )
        .catch(
            res.status(500).json({message:"Server error"})
        );
    } catch (error) {
        res.status(500).json({message:error});  
    }
});

module.exports = router;