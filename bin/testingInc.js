const mongoose = require("mongoose");
const itemModel = require("../models/item.model");
require("../config/db.config");

let id = "5ffc4407039cd02960564f35";
itemModel
  .findByIdAndUpdate(id, { $inc: { nrOfItems: -1 } })
  .then(() => {
    console.log("SeedItems added");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("Smth went wrong: ", err);
  });
