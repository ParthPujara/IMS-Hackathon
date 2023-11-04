const router = require('express').Router();
const {Employee,validate} = require('../models/employee');
const Items = require('../models/items');
const Department = require('../models/department');
const Request = require('../models/request');
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
        await new Employee({...req.body,password:hashPassword,role:"employee"}).save()
        .then(()=>{
            res.status(200).json({status:true,message:"Registered Successfully!"})
        })
    } catch (error) {
        res.status(500).json({status:false,message:`error occured: ${error}`});  
    }
});

// router.get("/getItems",async(req,res)=>{
//     try {
//         const items = await Items.find();
//         if(items){
//             return res.status(200).json({status:true,data:items});
//         }else{
//             return res.status(404).json({status:true, message:"No Items Found!"});
//         }
//     } catch (error) {
//         res.status(500).json({status:false,message:`error occured: ${error}`});     
//     }
// });

router.post("/addDept",async(req,res)=>{
    try {
        await new Department({
            name:"Electrical",
        }).save()
        .then(()=>{
            res.status(200).json({message:"Department Added Successfully!"})
        })
    } catch (error) {
        res.status(500).json({status:false,message:`error occured: ${error}`});     
    }
});

router.get("/getDept",async(req,res)=>{
    try {
        const dept = await Department.find();
        if(dept){
            return res.status(200).json({status:true,data:dept});
        }else{
            return res.status(404).json({status:true, message:"No Items Found!"});
        }
    } catch (error) {
        res.status(500).json({status:false,message:`error accured ${error}`});     
    }
});

router.get("/getReq/:id",async(req,res)=>{
    try {
        const id = req.params['id'];
        const req = Request.find({departmentId:id});
        if(req){
            return res.status(200).json({status:true,data:req});
        }else{
            return res.status(404).json({status:true, message:"No Requests Found!"});
        }
    } catch (error) {
        res.status(500).json({status:false,message:`error occured: ${error}`});     
    }
});

module.exports = router;