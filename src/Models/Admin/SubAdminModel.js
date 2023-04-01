const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    name: { type: String },
    password: { type: String },
    role: { type: String },
    mobile: { type: String },
    photo: { type: String },
    country: { type: String },
    city: { type: String },
    zip: { type: String },
    designation: { type: String },
    address: { type: String },
    userAccess: [
      {
        create: { type: Boolean },
        edit: { type: Boolean },
        update: { type: Boolean },
        delete: { type: Boolean },
        view: { type: Boolean },
        _id: false,
      },
    ],
    blogAccess: [
      {
        create: { type: Boolean },
        edit: { type: Boolean },
        update: { type: Boolean },
        delete: { type: Boolean },
        view: { type: Boolean },
        _id: false,
      },
    ],
    foodAccess: [
      {
        create: { type: Boolean },
        edit: { type: Boolean },
        update: { type: Boolean },
        delete: { type: Boolean },
        view: { type: Boolean },
        _id: false,
      },
    ],
    riderAccess: [
      {
        create: { type: Boolean },
        edit: { type: Boolean },
        update: { type: Boolean },
        delete: { type: Boolean },
        view: { type: Boolean },
        _id: false,
      },
    ],
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const SubAdminModel = mongoose.model("sub-admins", DataSchema);
module.exports = SubAdminModel;
