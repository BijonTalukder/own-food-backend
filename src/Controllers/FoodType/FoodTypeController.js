const FoodTypeModel = require("../../Models/FoodType/FoodTypeModel");
const CreateFoodTypeService = require("../../Services/FoodType/CreateFoodTypeService");
const DeleteFoodTypeService = require("../../Services/FoodType/DeleteFoodTypeService");
const GetFoodTypeService = require("../../Services/FoodType/GetFoodTypeService");
const GetSingleFoodTypeService = require("../../Services/FoodType/GetSingleFoodTypeService");
const UpdateFoodTypeService = require("../../Services/FoodType/UpdateFoodTypeService");

//! Create FoodType
exports.CreateFoodType = async (req, res) => {
  let result = await CreateFoodTypeService(req, FoodTypeModel);
  res.status(200).json(result);
};

//! Get FoodType
exports.GetFoodType = async (req, res) => {
  let result = await GetFoodTypeService(req, FoodTypeModel);
  res.status(200).json(result);
};
//! Get single FoodType
exports.GetSingleFoodType = async (req, res) => {
  let result = await GetSingleFoodTypeService(req, FoodTypeModel);
  res.status(200).json(result);
};

//! Update FoodType
exports.UpdateFoodType = async (req, res) => {
  let result = await UpdateFoodTypeService(req, FoodTypeModel);
  res.status(200).json(result);
};

//! Delete FoodType
exports.DeleteFoodType = async (req, res) => {
  let result = await DeleteFoodTypeService(req, FoodTypeModel);
  res.status(200).json(result);
};
