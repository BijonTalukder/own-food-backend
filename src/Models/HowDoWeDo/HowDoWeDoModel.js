const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    Details: { type: String },
    beforeImage: { type: String },
    afterImage: { type: String },
    Status: { type: Boolean },
    sellerID: { type: mongoose.Schema.Types.ObjectId },

    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const HowDoWeDoModel = mongoose.model("how-do-we-do", DataSchema);
module.exports = HowDoWeDoModel;
