const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    countryID: { type: mongoose.Schema.Types.ObjectId },
    sellerID:{type:mongoose.Schema.Types.ObjectId},// from user table
    sellerNumber:{type:String},
    userName:{type:String},
    regionID: { type: mongoose.Schema.Types.ObjectId },
    cityID: { type: mongoose.Schema.Types.ObjectId },
    sellerNationalityID: { type: String },
    sellerNationalityByBornID: { type: String },
    sellerProfilePhoto: { type: String },
    kitchenName: { type: String },
    kitchenImages: [
      {
        captionTitle: { type: String },
        captionDesc: { type: String },
        image: { type: String },
      },
    ],

    kitchenVideos: { type: String },
    sellerNationality: { type: String },
    sellerNationalityByBorn: { type: String },
    cusinesArray: [
      {
        cusineName: { type: String },
        countryName: { type: String },
        cusineID: { type: mongoose.Schema.Types.ObjectId },
        countryID: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    dishesMedia: [
      {
        captionText: { type: String },
        captionDesc: { type: String },
        photo: { type: String },
        video: { type: String },
      },
    ],
    otherFoodSkillsMedia: [
      {
        foodType: { type: String },
        photo: { type: String },
        video: { type: String },
        captionText: { type: String },
        captionDesc: { type: String },
      },
    ],
    myExperimentalFoodMedia: [
      {
        photo: { type: String },
        video: { type: String },
        captionText: { type: String },
        captionDesc: { type: String },
      },
    ],
    myRestrictions: [
      {
        additionalTagID: { type: mongoose.Schema.Types.ObjectId },
        tagName: { type: String },
      },
    ],
    isSellInstantFood: { type: Boolean },
    isTakeWishOrder: { type: Boolean },
    isTakePreOrder: { type: Boolean },
    isTakeCateringOrder: { type: Boolean },
    Latitude: { type: String },
    longitude: { type: String },
    bankDetails: [
      {
        bankAccNo: { type: String },
        bankAccName: { type: String },
        bankRoutingNo: { type: String },
        bankName: { type: String },
        currency: { type: String },
        bankVerificationCode: { type: String },
      },
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId },
    updatedBy: { type: mongoose.Schema.Types.ObjectId },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() },
  },

  { versionKey: false }
);

const BecomeSeller = mongoose.model("become-a-sellers", DataSchema);

module.exports = BecomeSeller;
