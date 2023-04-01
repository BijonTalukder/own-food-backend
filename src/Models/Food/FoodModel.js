const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    customerID: { type: mongoose.Schema.Types.ObjectId },
    sellerID: { type: mongoose.Schema.Types.ObjectId },
    foodTypeID: { type: mongoose.Schema.Types.ObjectId },
    categoryID: { type: mongoose.Schema.Types.ObjectId },
    cuisineCollection: { type: Array },
    sellerImage: { type: String },
    sellerName: { type: String },
    foodName: { type: String },
    foodSlug: { type: String },
    foodImage: { type: String },
    foodThumb: { type: String },
    foodVideo: { type: String },
    foodQty: { type: String },
    foodPrice: { type: String },
    foodDiscountPrice: { type: String },
    foodDiscountPercentage: { type: String },
    foodDiscountStartDate: { type: String },
    foodDiscountEndDate: { type: String },
    foodPortionSize: { type: Number },
    foodPortionSizeUnit: { type: String },
    foodMinimumOrderQty: { type: String },
    foodAdditionalInfo: { type: String },
    foodAdditionalTags: { type: Array },
    foodExpiryTime: { type: String },
    foodAvailableDays: { type: Array },
    foodAvailableSameDaysEachWeek: { type: Boolean },
    foodOrderBeforeTime: { type: String },
    foodRating: { type: String },
    status: { type: Boolean ,default:false},
    foodLabel: { type: Array },
    customerRequestedFoodQty: { type: String },
    customerDesireDeliveryDate: { type: String },
    customerDesireDeliveryTime: { type: String },
    BSR: { type: Number },
    createdBy: { type: String },
    updatedBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const FoodModel = mongoose.model("foods", DataSchema);
module.exports = FoodModel;
