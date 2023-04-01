const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    categoryID: { type: mongoose.Schema.Types.ObjectId },
    categoryName: { type: String },
    categoryImage: { type: String },
    categorySlug: { type: String },
    status: { type: String },

    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const SubCategoryModel = mongoose.model("subcategories", DataSchema);
module.exports = SubCategoryModel;
