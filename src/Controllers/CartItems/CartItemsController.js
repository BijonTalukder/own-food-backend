const CartItemsModel = require("../../Models/CartItems/CartItemsModel");
const CreateCartItemsService = require("../../Services/CartItems/CreateCartItemsService");
const DeleteCarItemsService = require("../../Services/CartItems/DeleteCarItemsService");
const GetCartItemsService = require("../../Services/CartItems/GetCartItemsService");
const GetSingleCartItemsService = require("../../Services/CartItems/GetSingleCartItemsService");
const UpdateCartItemsService = require("../../Services/CartItems/UpdateCartItemsService");

//! Create CarItems
exports.CreateCarItems = async (req, res) => {
  let result = await CreateCartItemsService(req, CartItemsModel);
  res.status(200).json(result);
};

//! Get CarItems
exports.GetCarItems = async (req, res) => {
  let result = await GetCartItemsService(req, CartItemsModel);
  res.status(200).json(result);
};
//! Get single CarItems
exports.GetSingleCarItems = async (req, res) => {
  let result = await GetSingleCartItemsService(req, CartItemsModel);
  res.status(200).json(result);
};

//! Update CarItems
exports.UpdateCarItems = async (req, res) => {
  let result = await UpdateCartItemsService(req, CartItemsModel);
  res.status(200).json(result);
};

//! Delete CarItems
exports.DeleteCarItems = async (req, res) => {
  let result = await DeleteCarItemsService(req, CartItemsModel);
  res.status(200).json(result);
};
