const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    countryID: { type: mongoose.Schema.Types.ObjectId },
    cuisineName: { type: String },
    cuisineImage: { type: String },
    data: { type: String },
    cuisineImageThumb: { type: String },
    status: { type: Boolean },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CuisineModel = mongoose.model("cuisines", DataSchema);
module.exports = CuisineModel;
