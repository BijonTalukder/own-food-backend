const SubCategoryModel = require("../../Models/SubCategory/SubCategoryModel");
const CreateSubCategoryService = require("../../Services/SubCategory/CreateSubCategoryService");
const DeleteSubCategoryService = require("../../Services/SubCategory/DeleteSubCategoryService");
const GetFoodBySubCategoryService = require("../../Services/SubCategory/GetFoodBySubCategoryService");
const GetSingleSubCategoryService = require("../../Services/SubCategory/GetSingleSubCategoryService");
const GetSubCategoryService = require("../../Services/SubCategory/GetSubCategoryService");
const UpdateSubCategoryService = require("../../Services/SubCategory/UpdateSubCategoryService");

//! Create SubCategory
exports.CreateSubCategory = async (req, res) => {
  let result = await CreateSubCategoryService(req, SubCategoryModel);

  res.status(200).json(result);
};
//! get subcategory
exports.GetSubCategory = async (req, res) => {
  let result = await GetSubCategoryService(req, SubCategoryModel);
  res.status(200).json(result);
};
//! update subcategory
exports.UpdateSubCategory = async (req, res) => {
  let result = await UpdateSubCategoryService(req, SubCategoryModel);
  res.status(200).json(result);
};
//! delete subcategory

exports.DeleteSubCategory = async (req, res) => {
  let result = await DeleteSubCategoryService(req, SubCategoryModel);
  res.status(200).json(result);
};

//! get single subcategory
exports.GetSingleSubCategory = async (req, res) => {
  let result = await GetSingleSubCategoryService(req, SubCategoryModel);
  res.status(200).json(result);
};

//!get food by subcategory
exports.GetFoodBySubCategory = async (req, res) => {
  let result = await GetFoodBySubCategoryService(req, SubCategoryModel);
  res.status(200).json(result);
}
