const OrderStatusModel = require("../../Models/OrderStatus/OrderStatusModel");
const CreateOrderStatusService = require("../../Services/OrderStatus/CreateOrderStatusService");
const DeleteOrderStatusService = require("../../Services/OrderStatus/DeleteOrderStatusService");
const GetOrderStatusService = require("../../Services/OrderStatus/GetOrderStatusService");
const GetSingleOrderStatusService = require("../../Services/OrderStatus/GetSingleOrderStatusService");
const UpdateOrderStatusService = require("../../Services/OrderStatus/UpdateOrderStatusService");

//! Create OrderStatus
exports.CreateOrderStatus = async (req, res) => {
  let result = await CreateOrderStatusService(req, OrderStatusModel);
  res.status(200).json(result);
};

//! Get OrderStatus
exports.GetOrderStatus = async (req, res) => {
  let result = await GetOrderStatusService(req, OrderStatusModel);
  res.status(200).json(result);
};
//! Get single OrderStatus
exports.GetSingleOrderStatus = async (req, res) => {
  let result = await GetSingleOrderStatusService(req, OrderStatusModel);
  res.status(200).json(result);
};

//! Update OrderStatus
exports.UpdateOrderStatus = async (req, res) => {
  let result = await UpdateOrderStatusService(req, OrderStatusModel);
  res.status(200).json(result);
};

//! Delete OrderStatus
exports.DeleteOrderStatus = async (req, res) => {
  let result = await DeleteOrderStatusService(req, OrderStatusModel);
  res.status(200).json(result);
};
