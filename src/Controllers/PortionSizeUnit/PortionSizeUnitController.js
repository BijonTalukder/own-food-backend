const PortionSizeUnitModel = require("../../Models/PortionSizeUnit/PortionSizeUnitModel");
const CreatePortionSizeUnitService = require("../../Services/PortionSizeUnit/CreatePortionSizeUnitService");
const DeletePortionSizeUnitService = require("../../Services/PortionSizeUnit/DeletePortionSizeUnitService");
const GetPortionSizeUnitService = require("../../Services/PortionSizeUnit/GetPortionSizeUnitService");
const GetSinglePortionSizeUnitService = require("../../Services/PortionSizeUnit/GetSinglePortionSizeUnitService");
const UpdatePortionSizeUnitService = require("../../Services/PortionSizeUnit/UpdatePortionSizeUnitService");

//! Create PortionSizeUnit
exports.CreatePortionSizeUnit = async (req, res) => {
  let result = await CreatePortionSizeUnitService(req, PortionSizeUnitModel);
  res.status(200).json(result);
};

//! Get PortionSizeUnit
exports.GetPortionSizeUnit = async (req, res) => {
  let result = await GetPortionSizeUnitService(req, PortionSizeUnitModel);
  res.status(200).json(result);
};
//! Get single PortionSizeUnit
exports.GetSinglePortionSizeUnit = async (req, res) => {
  let result = await GetSinglePortionSizeUnitService(req, PortionSizeUnitModel);
  res.status(200).json(result);
};

//! Update PortionSizeUnit
exports.UpdatePortionSizeUnit = async (req, res) => {
  let result = await UpdatePortionSizeUnitService(req, PortionSizeUnitModel);
  res.status(200).json(result);
};

//! Delete PortionSizeUnit
exports.DeletePortionSizeUnit = async (req, res) => {
  let result = await DeletePortionSizeUnitService(req, PortionSizeUnitModel);
  res.status(200).json(result);
};
