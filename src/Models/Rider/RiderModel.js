const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    riderName: { type: String },
    riderMobileNo: { type: String },
    addressID: { type: mongoose.Schema.Types.ObjectId },
    riderApproval: { type: Boolean },
    vehicleDetails: [
      {
        vehicleType: { type: String },
        vehicleRegNo: { type: String },
        vehicleTaxToken: { type: String },
        vehicleTaxTokenExpiry: { type: String },
      },
    ],
    License: [
      {
        licenseType: { type: String },
        LicenseNo: { type: String },
        licenseExpiryDate: { type: String },
      },
    ],
    Reviews: [
      {
        reviewBy: { type: String },
        comments: { type: String },
        reviewStar: { type: String },
        date: { type: Date, default: Date.now() },
        orderID: { type: mongoose.Schema.Types.ObjectId },
      },
    ],

    zipCode: { type: String },
    cityID: { type: mongoose.Schema.Types.ObjectId },
    regionID: { type: mongoose.Schema.Types.ObjectId },
    countryID: { type: mongoose.Schema.Types.ObjectId },
    date: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const RiderModel = mongoose.model("riders", DataSchema);
module.exports = RiderModel;
