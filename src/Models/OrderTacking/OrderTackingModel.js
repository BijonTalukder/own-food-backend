const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    orderID: { type: mongoose.Schema.Types.ObjectId },
    orderStatusID: { type: mongoose.Schema.Types.ObjectId },
    comment: { type: String },
    createdBy: { type: String },
    date: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const OrderTackingModel = mongoose.model("ordertackings", DataSchema);
module.exports = OrderTackingModel;
