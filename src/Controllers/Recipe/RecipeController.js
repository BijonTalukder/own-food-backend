const RecipeModel = require("../../Models/Recipe/RecipeModel");
const CreateRecipeService = require("../../Services/Recipe/CreateRecipeService");
const DeleteRecipeService = require("../../Services/Recipe/DeleteRecipeService");
const GetRecipeService = require("../../Services/Recipe/GetRecipeService");
const GetSingleRecipeService = require("../../Services/Recipe/GetSingleRecipeService");
const UpdateRecipeService = require("../../Services/Recipe/UpdateRecipeService");

//!create recipe
exports.CreateRecipe = async (req, res) => {
  let result = await CreateRecipeService(req, RecipeModel);
  res.status(200).json(result);
};

//!get recipe
exports.GetRecipe = async (req, res) => {
  let result = await GetRecipeService(req, RecipeModel);
  res.status(200).json(result);
};

//!get single recipe
exports.GetSingleRecipe = async (req, res) => {
  let result = await GetSingleRecipeService(req, RecipeModel);
  res.status(200).json(result);
};

//!update recipe
exports.UpdateRecipe = async (req, res) => {
  let result = await UpdateRecipeService(req, RecipeModel);
  res.status(200).json(result);
};

//!delete recipe
exports.DeleteRecipe = async (req, res) => {
  let result = await DeleteRecipeService(req, RecipeModel);
  res.status(200).json(result);
};
