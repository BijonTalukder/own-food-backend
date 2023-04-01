const DesignationModel = require("../../Models/Designation/DesignationModel");
const CreateDesignationService = require("../../Services/Designation/CreateDesignationService");
const DeleteDesignationService = require("../../Services/Designation/DeleteDesignationService");
const GetAllDesignationService = require("../../Services/Designation/GetAllDesignationService");
const GetSingleDesignationService = require("../../Services/Designation/GetSingleDesignationService");
const UpdateDesignationService = require("../../Services/Designation/UpdateDesignationService");

//! Create Designation
exports.CreateDesignation = async (req, res) => {
  let result = await CreateDesignationService(req, DesignationModel);
  res.status(200).json(result);
};
//! Get Designation
exports.GetDesignation = async (req, res) => {
  let result = await GetAllDesignationService(req, DesignationModel);
  res.status(200).json(result);
};

//! Get single Designation
exports.GetSingleDesignation = async (req, res) => {
  let result = await GetSingleDesignationService(req, DesignationModel);
  res.status(200).json(result);
};

//! Update Designation
exports.UpdateDesignation = async (req, res) => {
  let result = await UpdateDesignationService(req, DesignationModel);
  res.status(200).json(result);
};

//! Delete Designation
exports.DeleteDesignation = async (req, res) => {
  let result = await DeleteDesignationService(req, DesignationModel);
  res.status(200).json(result);
};
