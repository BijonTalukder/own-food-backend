const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    couponRefOrderID: { type: mongoose.Schema.Types.ObjectId },
    categoriesID: { type: mongoose.Schema.Types.ObjectId },
    couponForProductID: { type: mongoose.Schema.Types.ObjectId },
    sellerID: { type: mongoose.Schema.Types.ObjectId },
    createdBy: { type: mongoose.Schema.Types.ObjectId },
    isForReview: { type: Boolean },
    isCouponForAllProduct: { type: Boolean },
    couponForUserID: { type: Array },
    couponCode: { type: String },
    couponStartDate: { type: Date, default: Date.now() },
    couponEndDate: { type: Date, default: Date.now() },
    couponAmount: { type: Number },
    couponIsPercentage: { type: Boolean },
    couponMinPurchase: { type: Number },
  },
  { versionKey: false }
);
const CouponModel = mongoose.model("coupon", DataSchema);
module.exports = CouponModel;
