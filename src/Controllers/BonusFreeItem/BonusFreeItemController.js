const BonusFreeItemModel = require("../../Models/BonusFreeItem/BonusFreeItemModel");
const CreateBonusFreeitemService = require("../../Services/BonusFreeItem/CreateBonusFreeitemService");
const DeleteBonusFreeItemService = require("../../Services/BonusFreeItem/DeleteBonusFreeItemService");
const GetBonusFreeItemService = require("../../Services/BonusFreeItem/GetBonusFreeItemService");
const GetSingleBonusFreeItemService = require("../../Services/BonusFreeItem/GetSingleBonusFreeItemService");
const UpdateBonusFreeItemService = require("../../Services/BonusFreeItem/UpdateBonusFreeItemService");

//create CreateBonusFreeItem

exports.CreateBonusFreeItem = async (req, res) => {
  let result = await CreateBonusFreeitemService(req, BonusFreeItemModel);
  res.status(200).json(result);
};

//get CreateBonusFreeItem
exports.GetBonusFreeItem = async (req, res) => {
  let result = await GetBonusFreeItemService(req, BonusFreeItemModel);
  res.status(200).json(result);
};

//update CreateBonusFreeItem
exports.UpdateBonusFreeItem = async (req, res) => {
  let result = await UpdateBonusFreeItemService(req, BonusFreeItemModel);
  res.status(200).json(result);
};

//delete CreateBonusFreeItem
exports.DeleteBonusFreeItem = async (req, res) => {
  let result = await DeleteBonusFreeItemService(req, BonusFreeItemModel);
  res.status(200).json(result);
};

//get single CreateBonusFreeItem
exports.GetSingleBonusFreeItem = async (req, res) => {
  let result = await GetSingleBonusFreeItemService(req, BonusFreeItemModel);
  res.status(200).json(result);
};
