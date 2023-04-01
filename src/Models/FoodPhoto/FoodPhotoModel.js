const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    foodID: { type: mongoose.Schema.Types.ObjectId },

    foodImage: { type: String },
    foodThumb: { type: String },
    foodVideo: { type: String },
  },
  { versionKey: false }
);
const FoodPhotoModel = mongoose.model("food-photos", DataSchema);
module.exports = FoodPhotoModel;
