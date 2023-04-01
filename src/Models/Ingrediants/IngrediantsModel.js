const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    ingredientName: { type: String },
    ingredientImage: { type: String },
    ingredientThumb: { type: String },
    ingredientQty: { type: String },
    status: { type: Boolean },
    cuisineID: { type: mongoose.Schema.Types.ObjectId },

    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const IngrediantsModel = mongoose.model("ingrediants", DataSchema);
module.exports = IngrediantsModel;
