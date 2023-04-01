const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    countryName: { type: String },
    countryFlag: { type: String },
    countryCode: { type: String },
    countryPhoneCode: { type: String },
    countryCapital: { type: String },
    status: { type: Boolean },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CountryModel = mongoose.model("countries", DataSchema);
module.exports = CountryModel;
