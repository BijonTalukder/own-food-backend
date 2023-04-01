const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    regionID: { type: mongoose.Schema.Types.ObjectId },
    countryID: { type: mongoose.Schema.Types.ObjectId },
    countryName:{type:String},
    cityName: { type: String },
    cityImage: { type: String },
    cityThumb: { type: String },
    status: { type: Boolean },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CityModel = mongoose.model("citys", DataSchema);
module.exports = CityModel;
