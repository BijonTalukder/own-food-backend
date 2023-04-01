const OrderTackingModel = require("../../Models/OrderTacking/OrderTackingModel");
const CreateOrderTackingService = require("../../Services/OrderTacking/CreateOrderTackingService");
const DeleteOrderTackingService = require("../../Services/OrderTacking/DeleteOrderTackingService");
const GetOrderTackingService = require("../../Services/OrderTacking/GetOrderTackingService");
const GetSingleOrderTackingService = require("../../Services/OrderTacking/GetSingleOrderTackingService");
const UpdateOrderTackingService = require("../../Services/OrderTacking/UpdateOrderTackingService");

//! Create OrderTacking
exports.CreateOrderTacking = async (req, res) => {
  let result = await CreateOrderTackingService(req, OrderTackingModel);
  res.status(200).json(result);
};

//! Get OrderTacking
exports.GetOrderTacking = async (req, res) => {
  let result = await GetOrderTackingService(req, OrderTackingModel);
  res.status(200).json(result);
};
//! Get single OrderTacking
exports.GetSingleOrderTacking = async (req, res) => {
  let result = await GetSingleOrderTackingService(req, OrderTackingModel);
  res.status(200).json(result);
};

//! Update OrderTacking
exports.UpdateOrderTacking = async (req, res) => {
  let result = await UpdateOrderTackingService(req, OrderTackingModel);
  res.status(200).json(result);
};

//! Delete OrderTacking
exports.DeleteOrderTacking = async (req, res) => {
  let result = await DeleteOrderTackingService(req, OrderTackingModel);
  res.status(200).json(result);
};
