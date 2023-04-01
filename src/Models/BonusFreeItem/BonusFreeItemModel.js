const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    bonusFreeItemName: { type: String },
    bonusFreeItemImage: { type: String },
    bonusFreeItemThum: { type: String },
    bonusFreeItemVideo: { type: String },
    sellerID: { type: mongoose.Schema.Types.ObjectId },
  },
  { versionKey: false }
);
const BonusFreeItem = mongoose.model("bonus-freeItem", DataSchema);
module.exports = BonusFreeItem;
