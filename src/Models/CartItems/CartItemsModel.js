const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    foodID: { type: mongoose.Schema.Types.ObjectId },
    customerID: { type: mongoose.Schema.Types.ObjectId },
    foodName: { type: String },
    foodQty: { type: Number },
    foodUnitPrice: { type: Number },
    foodTotalPrice: { type: Number },
    status: { type: Boolean },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CartItemsModel = mongoose.model("cartitems", DataSchema);
module.exports = CartItemsModel;
