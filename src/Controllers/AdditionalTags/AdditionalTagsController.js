const AdditionalTagsModel = require("../../Models/AdditionalTags/AdditionalTagsModel");
const CreateAdditionalTagService = require("../../Services/CreateAdditionalTag/CreateAdditionalTagService");
const DeleteAdditionalTagService = require("../../Services/CreateAdditionalTag/DeleteAdditionalTagService");
const GetAdditionalTagService = require("../../Services/CreateAdditionalTag/GetAdditionalTagService");
const GetSingleAdditionalTagService = require("../../Services/CreateAdditionalTag/GetSingleAdditionalTagService");
const UpdateAdditionalTagService = require("../../Services/CreateAdditionalTag/UpdateAdditionalTagService");

//create AdditionalTags
exports.CreateAdditionalTag = async (req, res) => {
  let result = await CreateAdditionalTagService(req, AdditionalTagsModel);
  res.status(200).json(result);
};

//get AdditionalTags
exports.GetAdditionalTag = async (req, res) => {
  let result = await GetAdditionalTagService(req, AdditionalTagsModel);
  res.status(200).json(result);
};

//update AdditionalTags
exports.UpdateAdditionalTag = async (req, res) => {
  let result = await UpdateAdditionalTagService(req, AdditionalTagsModel);
  res.status(200).json(result);
};

//delete AdditionalTags
exports.DeleteAdditionalTag = async (req, res) => {
  let result = await DeleteAdditionalTagService(req, AdditionalTagsModel);
  res.status(200).json(result);
};

//get single additional tags
exports.GetSingleAdditionalTag = async (req, res) => {
  let result = await GetSingleAdditionalTagService(req, AdditionalTagsModel);
  res.status(200).json(result);
};
