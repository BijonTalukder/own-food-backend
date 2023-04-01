const IngrediantsModel = require("../../Models/Ingrediants/IngrediantsModel");
const CreateIngrediantsService = require("../../Services/Ingrediants/CreateIngrediantsService");
const DeleteIngrediantsService = require("../../Services/Ingrediants/DeleteIngrediantsService");
const GetIngrediantsService = require("../../Services/Ingrediants/GetIngrediantsService");
const GetSingleIngrediantsService = require("../../Services/Ingrediants/GetSingleIngrediantsService");
const UpdateIngrediantsService = require("../../Services/Ingrediants/UpdateIngrediantsService");

//! Create Ingrediants
exports.CreateIngrediants = async (req, res) => {
  let result = await CreateIngrediantsService(req, IngrediantsModel);
  res.status(200).json(result);
};

//! Get Ingrediants
exports.GetIngrediants = async (req, res) => {
  let result = await GetIngrediantsService(req, IngrediantsModel);
  res.status(200).json(result);
};
//! Get single Ingrediants
exports.GetSingleIngrediants = async (req, res) => {
  let result = await GetSingleIngrediantsService(req, IngrediantsModel);
  res.status(200).json(result);
};

//! Update Ingrediants
exports.UpdateIngrediants = async (req, res) => {
  let result = await UpdateIngrediantsService(req, IngrediantsModel);
  res.status(200).json(result);
};

//! Delete Ingrediants
exports.DeleteIngrediants = async (req, res) => {
  let result = await DeleteIngrediantsService(req, IngrediantsModel);
  res.status(200).json(result);
};
