const routes = require("express").Router();
const Items = require("../models/items");
const Request = require('../models/request');

routes.post("/addItem", async (req, res) => {
  let flag = true;
  try {
    const { category, name, price } = req.body;

    Items.findOne({ "items.category": category })
    .then(async()=>{
      const result = await Items.updateOne(
        { "items.category": category },
        { $push: { "items.$.item_details": { name: name, price: price } } }
      );
      if (result){
        flag=false;
        return res.status(200).json({status:true, message: "Item added to the category" });
      }else{
        return res.status(500).json({status:false, message: "Error occured" });
      }
    });
    if(flag){
      await new Items({
        items: [
          {
            category: category,
            item_details: [
              {
                name: name,
                price: price,
              },
            ],
          },
        ],
      })
        .save()
        .then(() => {
          res.status(200).json({status:true, message: "Item added successfully" });
        }); 
    }
  } catch (error) {
    res.status(500).json({ status:false,message: `Error accured: ${error}` });
  }
});

routes.get("/getReq", async (req, res) => {
  try {
  const req = Request.find();
  if(req){
    return res.status(200).json({status:true, data:req });
  }else{
    return res.status(404).json({status:true, message:"No Requests Found!" });
  }
  } catch (error) {
    res.status(500).json({ status:false,message: `Error accured: ${error}` }); 
  }
})

module.exports = routes;
