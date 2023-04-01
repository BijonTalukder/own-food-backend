const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    blogID: { type: mongoose.Schema.Types.ObjectId },
    userID: { type: mongoose.Schema.Types.ObjectId },
    blogTitle: { type: String },
    blogSlug: { type: String },
    blogImage: { type: String },
    blogVideo: { type: String },
    captionTitle: { type: String },
    captionDesc: { type: String },
    blogShortDesc: { type: String },
    blogDesc: { type: String },
    blogKeyWords: { type: Array },
    blogTags: { type: Array },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const FoodDiaryModel = mongoose.model("food-diaries", DataSchema);
module.exports = FoodDiaryModel;
