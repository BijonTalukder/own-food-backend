const SubAdminModel = require("../../Models/Admin/SubAdminModel");
const CreateSubAdmin = require("../../Services/Admin/CreateSubAdmin");
const DeleteSubAdminService = require("../../Services/Admin/DeleteSubAdminService");
const GetAllSubAdmin = require("../../Services/Admin/GetAllSubAdmin");
const LoginSubAdmin = require("../../Services/Admin/LoginSubAdmin");
const UpdateSubAdminService = require("../../Services/Admin/UpdateSubAdminService");

//! Registration Sub-Admin
exports.Registration = async (req, res) => {
  let result = await CreateSubAdmin(req, SubAdminModel);
  res.status(200).json(result);
};

//! Login Supper Admin
exports.Login = async (req, res) => {
  let result = await LoginSubAdmin(req, SubAdminModel);
  res.status(200).json(result);
};

//! Get All Sub-Admin
exports.GetSubAdmin = async (req, res) => {
  let result = await GetAllSubAdmin(req, SubAdminModel);
  res.status(200).json(result);
};

//! Delete Sub-Admin
exports.DeleteSubAdmin = async (req, res) => {
  let result = await DeleteSubAdminService(req, SubAdminModel);
  res.status(200).json(result);
};

//! Update Sub-Admin
exports.UpdateSubAdmin = async (req, res) => {
  let result = await UpdateSubAdminService(req, SubAdminModel);
  res.status(200).json(result);
};
