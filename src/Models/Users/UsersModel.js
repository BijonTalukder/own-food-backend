const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    userFullName: { type: String },
    userPassword: { type: String },
    userName: { type: String },
    userEmail: { type: String },
    userMobileNo: { type: String },
    userPhoto: { type: String },
    userDateOfBirth: { type: String },
    userGender: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    address: { type: String },
    zipCode: { type: String },
    cityID: { type: mongoose.Schema.Types.ObjectId },
    regionID: { type: mongoose.Schema.Types.ObjectId },
    countryID: { type: mongoose.Schema.Types.ObjectId },
    userTermsAgreed: { type: Boolean },
    sellerStatus: { type: Boolean },
    riderStatus: { type: Boolean },
    rendingOTP: { type: String },
    activatedOTP: { type: String },
    userMobileVerified: { type: Boolean },
    userEmailVerified: { type: Boolean },
    status: { type: Boolean },

    registrationDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const UsersModel = mongoose.model("users", DataSchema);
module.exports = UsersModel;
