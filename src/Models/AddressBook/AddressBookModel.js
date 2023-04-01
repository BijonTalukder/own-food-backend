const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    cityID: { type: mongoose.Schema.Types.ObjectId },
    regionID: { type: mongoose.Schema.Types.ObjectId },
    countryID: { type: mongoose.Schema.Types.ObjectId },
    customerID: { type: mongoose.Schema.Types.ObjectId },
    createdBy: { type: mongoose.Schema.Types.ObjectId },
    addressText: { type: String },
    addressType: { type: String },
    shippingDefault: { type: Boolean },
    billingDefault: { type: Boolean },
    latitude: { type: String },
    logitude: { type: String },
    zipCode: { type: String },
    status: { type: Boolean },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const AddressBookModel = mongoose.model("addressbooks", DataSchema);
module.exports = AddressBookModel;
