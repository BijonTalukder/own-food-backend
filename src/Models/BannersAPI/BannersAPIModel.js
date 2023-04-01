const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    bannerTitle: { type: String },
    bannerDesc: { type: String },
    bannerImage: { type: String },
    bannerBackgroundColor: { type: String },
    bannerButtonLabel: { type: String },
    bannerButtonColor: { type: String },
    bannerButtonURL: { type: String },
    Status: { type: Boolean },
    orderBy: { type: String },
    bannerExpiry: { type: String },
    categoryIDs: [{ type: mongoose.Schema.Types.ObjectId }],

    sellerID: { type: mongoose.Schema.Types.ObjectId },
  },
  { versionKey: false }
);
const BannersAPIModel = mongoose.model("banners", DataSchema);
module.exports = BannersAPIModel;
