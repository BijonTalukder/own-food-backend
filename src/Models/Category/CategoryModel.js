const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    categoryName: { type: String },
    categoryImage: { type: String },
    categorySlug: { type: String, unique: true },
    status: { type: Boolean },
    createdBy: { type: mongoose.Schema.Types.ObjectId },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: mongoose.Schema.Types.ObjectId },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CategoryModel = mongoose.model("categorys", DataSchema);
module.exports = CategoryModel;
