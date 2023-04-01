const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    circleType: { type: String },
    circleCategoryID: [
      {
        _id: false,
        label: { type: String },
        value: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    circleCountryID: [
      {
        _id: false,
        label: { type: String },
        value: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    circleLimit: { type: Number },
    circleByReview: { type: Boolean },
    bestSellingFood: { type: Boolean },
    circleFoods: { type: Array },
    circleSellerID: [
      {
        _id: false,
        label: { type: String },
        value: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
  },
  { versionKey: false }
);

const CircleTypeFoodModel = mongoose.model("circle-type-foods", DataSchema);
module.exports = CircleTypeFoodModel;
