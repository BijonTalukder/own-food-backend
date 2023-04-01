const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    sizeUnitName: { type: String },
    status: { type: Boolean },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const PortionSizeUnitModel = mongoose.model("portionSizeUnits", DataSchema);
module.exports = PortionSizeUnitModel;
