const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    orderStatusTitle: { type: String },
    orderBy: { type: Number },
    status: { type: Boolean },
  },
  { versionKey: false }
);

const OrderStatusModel = mongoose.model("orderstatuses", DataSchema);
module.exports = OrderStatusModel;
