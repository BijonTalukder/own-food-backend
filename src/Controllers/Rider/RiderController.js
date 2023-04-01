const RiderModel = require("../../Models/Rider/RiderModel");
const CreateRiderService = require("../../Services/Rider/CreateRiderService");
const DeleteRiderService = require("../../Services/Rider/DeleteRiderService");
const GetRiderService = require("../../Services/Rider/GetRiderService");
const GetSingleRiderService = require("../../Services/Rider/GetSingleRiderService");
const UpdateRiderService = require("../../Services/Rider/UpdateRiderService");

//! Create Rider
exports.CreateRider = async (req, res) => {
  let result = await CreateRiderService(req, RiderModel);

  res.status(200).json(result);
};
//! get Rider
exports.GetRider = async (req, res) => {
  let result = await GetRiderService(req, RiderModel);
  res.status(200).json(result);
};

//! get single Rider
exports.GetSingleRider = async (req, res) => {
  let result = await GetSingleRiderService(req, RiderModel);
  res.status(200).json(result);
};

//! update Rider
exports.UpdateRider = async (req, res) => {
  let result = await UpdateRiderService(req, RiderModel);
  res.status(200).json(result);
};
//! delete Rider

exports.DeleteRider = async (req, res) => {
  let result = await DeleteRiderService(req, RiderModel);
  res.status(200).json(result);
};
