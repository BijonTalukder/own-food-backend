const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    foodID: { type: mongoose.Schema.Types.ObjectId },
    orderID: { type: mongoose.Schema.Types.ObjectId },
    riderID: { type: mongoose.Schema.Types.ObjectId },
    reviewDetails: { type: String },
    reviewImage: { type: String },
    reviewVideo: { type: String },
    reviewStar: { type: String },
    reviewBy: { type: String },
    date: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const RiderReviewModel = mongoose.model("rider-reviews", DataSchema);
module.exports = RiderReviewModel;
