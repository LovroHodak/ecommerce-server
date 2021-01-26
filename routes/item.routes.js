const express = require("express");
const router = express.Router();
const itemModel = require("../models/item.model");

//that means your browser route is: localhost:5050/api/items
router.get("/items", (req, res) => {
  itemModel.find().then((stuff) => {
    console.log('stuff is', stuff);
    res.status(200).json(stuff);
  });
});

router.get("/items/:itemId", (req, res) => {
  let id = req.params.itemId;
  const {nrOfItems} = req.body;
  itemModel
    .findById(id)
    .then((response) => {
      res.status(200).json(response);
      console.log("req.params: ", req.params); /* req.params:  { itemId: '5ffc4407039cd02960564f35' } */
      console.log("response.nrOfItems: ", response.nrOfItems);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

/* router.patch("/items/:itemId", (req, res) => {
  let id = req.params.id;
  itemModel
  .findByIdAndUpdate(id, { $inc: { nrOfItems: -1 } })
    .then((response) => {
      console.log('inc updated')
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: err,
      });
    });
}); */

module.exports = router;
