const FoodReviewModel = require("../../Models/FoodReview/FoodReviewModel");
const CreateFoodReviewService = require("../../Services/FoodReview/CreateFoodReviewService");
const DeleteFoodReviewService = require("../../Services/FoodReview/DeleteFoodReviewService");
const GetFoodReviewService = require("../../Services/FoodReview/GetFoodReviewService");
const GetSingleFoodReviewService = require("../../Services/FoodReview/GetSingleFoodReviewService");
const UpdateFoodReviewService = require("../../Services/FoodReview/UpdateFoodReviewService");

//create food review
exports.CreateFoodReview = async (req, res) => {
  let result = await CreateFoodReviewService(req, FoodReviewModel);
  res.status(200).json(result);
};

//get food review
exports.GetFoodReview = async (req, res) => {
  let result = await GetFoodReviewService(req, FoodReviewModel);
  res.status(200).json(result);
};

//get single food review
exports.GetSingleFoodReview = async (req, res) => {
  let result = await GetSingleFoodReviewService(req, FoodReviewModel);
  res.status(200).json(result);
};

//update food review
exports.UpdateFoodReview = async (req, res) => {
  let result = await UpdateFoodReviewService(req, FoodReviewModel);
  res.status(200).json(result);
};

//delete food review
exports.DeleteFoodReview = async (req, res) => {
  let result = await DeleteFoodReviewService(req, FoodReviewModel);
  res.status(200).json(result);
};
