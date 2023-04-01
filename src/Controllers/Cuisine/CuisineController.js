const CuisineModel = require("../../Models/Cuisine/CuisineModel");
const CreateCuisineService = require("../../Services/Cuisine/CreateCuisineService");
const DeleteCuisineService = require("../../Services/Cuisine/DeleteCuisineService");
const GetCuisineService = require("../../Services/Cuisine/GetCuisineService");
const GetSingleCuisineService = require("../../Services/Cuisine/GetSingleCuisineService");
const UpdateCuisineService = require("../../Services/Cuisine/UpdateCuisineService");

//! Create Cuisine
exports.CreateCuisine = async (req, res) => {
  let result = await CreateCuisineService(req, CuisineModel);
  res.status(200).json(result);
};

//! Get Cuisine
exports.GetCuisine = async (req, res) => {
  let result = await GetCuisineService(req, CuisineModel);
  res.status(200).json(result);
};
//! Get single Cuisine
exports.GetSingleCuisine = async (req, res) => {
  let result = await GetSingleCuisineService(req, CuisineModel);
  res.status(200).json(result);
};

//! Update Cuisine
exports.UpdateCuisine = async (req, res) => {
  let result = await UpdateCuisineService(req, CuisineModel);
  res.status(200).json(result);
};

//! Delete Cuisine
exports.DeleteCuisine = async (req, res) => {
  let result = await DeleteCuisineService(req, CuisineModel);
  res.status(200).json(result);
};
