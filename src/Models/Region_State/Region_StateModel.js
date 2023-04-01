const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    regionName: { type: String },
    regionImage: { type: String },
    regionThumb: { type: String },
    status: { type: Boolean },
    countryID: { type: mongoose.Schema.Types.ObjectId },
    countryName: { type: String },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const Region_StateModel = mongoose.model("regionstates", DataSchema);
module.exports = Region_StateModel;
