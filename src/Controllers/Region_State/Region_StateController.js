const Region_StateModel = require("../../Models/Region_State/Region_StateModel");
const CreateRegion_StateService = require("../../Services/Region_State/CreateRegion_StateService");
const DeleteRegion_StateService = require("../../Services/Region_State/DeleteRegion_StateService");
const GetRegion_StateService = require("../../Services/Region_State/GetRegion_StateService");
const GetSingleRegion_StateService = require("../../Services/Region_State/GetSingleRegion_StateService");
const UpdateRegion_StateService = require("../../Services/Region_State/UpdateRegion_StateService");

//! Create Region_State
exports.CreateRegion_State = async (req, res) => {
  let result = await CreateRegion_StateService(req, Region_StateModel);
  res.status(200).json(result);
};

//! Get Region_State
exports.GetRegion_State = async (req, res) => {
  let result = await GetRegion_StateService(req, Region_StateModel);
  res.status(200).json(result);
};
//! Get single Region_State
exports.GetSingleRegion_State = async (req, res) => {
  let result = await GetSingleRegion_StateService(req, Region_StateModel);
  res.status(200).json(result);
};

//! Update Region_State
exports.UpdateRegion_State = async (req, res) => {
  let result = await UpdateRegion_StateService(req, Region_StateModel);
  res.status(200).json(result);
};

//! Delete Region_State
exports.DeleteRegion_State = async (req, res) => {
  let result = await DeleteRegion_StateService(req, Region_StateModel);
  res.status(200).json(result);
};
