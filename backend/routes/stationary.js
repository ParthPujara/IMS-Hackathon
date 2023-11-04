const routes = require("express").Router();
const Items = require("../models/items");

routes.post("/addItem", async (req, res) => {
  try {
    const { category, name, price } = req.body;

    const cat = Items.findOne({ "items.category": category });
    // res.send({cat:cat});
    // if(cat)
    //   console.log(cat);
    if (!cat) {
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
          res.status(200).json({ message: "Item added successfully" });
        });
    
   } else {
        const result = await Items.updateOne(
          { "items.category": category },
          { $push: { "items.$.item_details": { name: name, price: price } } }
        );
        if (result){
          return res.status(200).json({ message: "Item added to the category" });
        }
        res.status(500).json({ message: "Error occured" });
   }
      
  } catch (error) {
    res.status(500).json({ message: `Error accured: ${error}` });
  }
});

module.exports = routes;
