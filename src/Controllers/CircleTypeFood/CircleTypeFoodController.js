const CircleTypeFoodModel = require("../../Models/CircleTypeFood/CircleTypeFoodModel");
const CreateCircleTypeFoodService = require("../../Services/CircleTypeFood/CreateCircleTypeFoodService");
const DeleteCircleTypeFoodService = require("../../Services/CircleTypeFood/DeleteCircleTypeFoodService");
const GetCircleTypeFoodService = require("../../Services/CircleTypeFood/GetCircleTypeFoodService");
const GetSingleCircleTypeFoodService = require("../../Services/CircleTypeFood/GetSingleCircleTypeFoodService");
const UpdateCircleTypeFoodService = require("../../Services/CircleTypeFood/UpdateCircleTypeFoodService");

//! Create CircleTypeFood
exports.CreateCircleTypeFood = async (req, res) => {
  let result = await CreateCircleTypeFoodService(req, CircleTypeFoodModel);
  res.status(200).json(result);
};
//! Get CircleTypeFood
exports.GetCircleTypeFood = async (req, res) => {
  let result = await GetCircleTypeFoodService(req, CircleTypeFoodModel);
  res.status(200).json(result);
};

//! Get single CircleTypeFood
exports.GetSingleCircleTypeFood = async (req, res) => {
  let result = await GetSingleCircleTypeFoodService(req, CircleTypeFoodModel);
  res.status(200).json(result);
};

//! Update CircleTypeFood
exports.UpdateCircleTypeFood = async (req, res) => {
  let result = await UpdateCircleTypeFoodService(req, CircleTypeFoodModel);
  res.status(200).json(result);
};

//! Delete CircleTypeFood
exports.DeleteCircleTypeFood = async (req, res) => {
  let result = await DeleteCircleTypeFoodService(req, CircleTypeFoodModel);
  res.status(200).json(result);
};
