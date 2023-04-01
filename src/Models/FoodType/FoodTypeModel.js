const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    foodTypeName: { type: String },
    foodTypeImage: { type: String },
    foodTypeCategories: { type: String },
    status: { type: Boolean },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const FoodTypeModel = mongoose.model("foodtypes", DataSchema);
module.exports = FoodTypeModel;
