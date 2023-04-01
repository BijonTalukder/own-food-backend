const FoodDiaryModel = require("../../Models/FoodDiary/FoodDiaryModel");
const CreateFoodDiaryService = require("../../Services/FoodDiary/CreateFoodDiaryService");
const DeleteFoodDiaryService = require("../../Services/FoodDiary/DeleteFoodDiaryService");
const GetFoodDiaryService = require("../../Services/FoodDiary/GetFoodDiaryService");
const GetSingleFoodDiaryService = require("../../Services/FoodDiary/GetSingleFoodDiaryService");
const UpdateFoodDiaryService = require("../../Services/FoodDiary/UpdateFoodDiaryService");

//create food diary
exports.CreateFoodDiary = async (req, res) => {
  let result = await CreateFoodDiaryService(req, FoodDiaryModel);
  res.status(200).json(result);
};

//get food diary
exports.GetFoodDiary = async (req, res) => {
  let result = await GetFoodDiaryService(req, FoodDiaryModel);
  res.status(200).json(result);
};

//get single food diary
exports.GetSingleFoodDiary = async (req, res) => {
  let result = await GetSingleFoodDiaryService(req, FoodDiaryModel);
  res.status(200).json(result);
};

//update food diary
exports.UpdateFoodDiary = async (req, res) => {
  let result = await UpdateFoodDiaryService(req, FoodDiaryModel);
  res.status(200).json(result);
};

//delete food diary
exports.DeleteFoodDiary = async (req, res) => {
  let result = await DeleteFoodDiaryService(req, FoodDiaryModel);
  res.status(200).json(result);
};
