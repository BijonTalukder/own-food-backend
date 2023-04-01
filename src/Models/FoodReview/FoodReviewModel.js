const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    reviewDetails: { type: String },
    reviewImage: { type: String },
    reviewVideo: { type: String },
    reviewStar: { type: Number },
    date: { type: Date, default: Date.now() },
    foodID: { type: mongoose.Schema.Types.ObjectId },
    orderID: { type: mongoose.Schema.Types.ObjectId },
    customerID: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    versionKey: false,
  }
);

const FoodReviewModel = mongoose.model("food-reviwes", DataSchema);
module.exports = FoodReviewModel;
