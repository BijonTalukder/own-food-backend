const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    categoryName:{type:String},
    categoryImage:{type:Array},
    categorySlug:{type:String},
    noOfRecipes:{type:Number},
    orderBy:{type:Number}

},
{
    versionKey:false
}
)
const RecipeCategoryModel = mongoose.model('recipecategories',DataSchema)
module.exports = RecipeCategoryModel