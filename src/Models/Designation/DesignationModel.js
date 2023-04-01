const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: { type: String },
    status: { type: Boolean },
    mobile: { type: String },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const DesignationModel = mongoose.model("designations", DataSchema);
module.exports = DesignationModel;
