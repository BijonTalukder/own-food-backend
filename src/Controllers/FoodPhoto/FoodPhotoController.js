const FoodPhotoModel = require("../../Models/FoodPhoto/FoodPhotoModel");
const CreateFoodPhotoService = require("../../Services/FoodPhoto/CreateFoodPhotoService");
const DeleteFoodPhotoService = require("../../Services/FoodPhoto/DeleteFoodPhotoService");
const GetFoodPhotoService = require("../../Services/FoodPhoto/GetFoodPhotoService");
const GetSingleFoodPhotoService = require("../../Services/FoodPhoto/GetSingleFoodPhotoService");
const UpdateFoodPhotoService = require("../../Services/FoodPhoto/UpdateFoodPhotoService");

//! Create Food Photo
exports.CreateFoodPhoto = async (req, res) => {
  let result = await CreateFoodPhotoService(req, FoodPhotoModel);
  res.status(200).json(result);
};

//! Get Food Photo
exports.GetFoodPhoto = async (req, res) => {
  let result = await GetFoodPhotoService(req, FoodPhotoModel);
  res.status(200).json(result);
};
//! Get single Food Photo
exports.GetSingleFoodPhoto = async (req, res) => {
  let result = await GetSingleFoodPhotoService(req, FoodPhotoModel);
  res.status(200).json(result);
};

//! Update Food Photo
exports.UpdateFoodPhoto = async (req, res) => {
  let result = await UpdateFoodPhotoService(req, FoodPhotoModel);
  res.status(200).json(result);
};

//! Delete Food Photo
exports.DeleteFoodPhoto = async (req, res) => {
  let result = await DeleteFoodPhotoService(req, FoodPhotoModel);
  res.status(200).json(result);
};
