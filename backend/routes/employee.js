const router = require('express').Router();
const Employee = require('../models/employee');
const Items = require('../models/items');

router.get("/getItems",async(req,res)=>{
    try {
        const items = await Items.find();
        if(items){
            return res.status(200).json({status:true,data:items});
        }else{
            return res.status(404).json({status:true, message:"No Items Found!"});
        }
    } catch (error) {
        res.status(500).json({status:false,message:`error occured: ${error}`});     
    }
});



module.exports = router;