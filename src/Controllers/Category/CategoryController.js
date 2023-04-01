const CategoryModel = require("../../Models/Category/CategoryModel");
const CreateCategoryService = require("../../Services/Category/CreateCategoryService");
const DeleteCategoryService = require("../../Services/Category/DeleteCategoryService");
const GetCategoryService = require("../../Services/Category/GetCategoryService");
const GetFoodByCategoryService = require("../../Services/Category/GetFoodByCategoryService");
const GetSingleCategoryService = require("../../Services/Category/GetSingleCategoryService");
const GetSubCategoryBySingleCategoryService = require("../../Services/Category/GetSubCategoryBySingleCategoryService");
const UpdateCategoryService = require("../../Services/Category/UpdateCategoryService");

//! Create Category
exports.CreateCategory = async (req, res) => {
  let result = await CreateCategoryService(req, CategoryModel);
  res.status(200).json(result);
};

//! Get Category
exports.GetCategory = async (req, res) => {
  let result = await GetCategoryService(req, CategoryModel);
  res.status(200).json(result);
};
//! Get single Category
exports.GetSingleCategory = async (req, res) => {
  let result = await GetSingleCategoryService(req, CategoryModel);
  res.status(200).json(result);
};

//! Update Category
exports.UpdateCategory = async (req, res) => {
  let result = await UpdateCategoryService(req, CategoryModel);
  res.status(200).json(result);
};

//! Delete Category
exports.DeleteCategory = async (req, res) => {
  let result = await DeleteCategoryService(req, CategoryModel);
  res.status(200).json(result);
};

//! Get Food By Category Limit
exports.GetFoodByCategory = async (req, res) => {
  let result = await GetFoodByCategoryService(req, CategoryModel);
  res.status(200).json(result);
};

//GetSubCategoryBySingleCategory
exports.GetSubCategoryBySingleCategory = async (req,res)=>{
  let result = await GetSubCategoryBySingleCategoryService(req, CategoryModel);
  res.status(200).json(result);
}