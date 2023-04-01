const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    recipeName: { type: String },
    sellerID:{type:mongoose.Schema.Types.ObjectId},
    recipeCategoryID:{type:mongoose.Schema.Types.ObjectId},
    recipeDescription: { type: String},
    proteinDetails: { type: String},
    preparationTime: { type:String},
    cookingTime:{type:String},
    recipeReadyFoodImage:{type:Array},
    recipeVideo:{type:String},

    shoppingList:{type:String},
    
    ingredients: [
      {
        Qty: { type: String },
        qtyUnit: { type: String },
        ingredientsName: { type: String },
        ingredientsID: { type: mongoose.Types.ObjectId },
      },
    ],
    recipeSteps: [
      {
        stepNumber: { type: Number},
        stepName: { type: String },
        Photo: { type:Array},
        Video: { type: String },
       
      },
    ],
    recipeTips: { type: String },
   
    isMyOwnRecipe: { type: Boolean },
    viewCount: { type: Number },
    likeCount: { type: Number },
    shareCount: { type: Number },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },

  { versionKey: false }
);

const Recipe = mongoose.model("recipe", DataSchema);

module.exports = Recipe;
