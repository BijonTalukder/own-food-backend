const OrdersModel = require("../../Models/Orders/OrdersModel");
const CreateOrdersService = require("../../Services/Orders/CreateOrdersService");
const DeleteOrdersService = require("../../Services/Orders/DeleteOrdersService");
const GetOrderBySingleBuyerService = require("../../Services/Orders/GetOrderBySingleBuyerService");
const GetOrderBySingleSellerService = require("../../Services/Orders/GetOrderBySingleSellerService");
const GetOrdersService = require("../../Services/Orders/GetOrdersService");
const GetSingleOrdersService = require("../../Services/Orders/GetSingleOrdersService");
const UpdateOrdersService = require("../../Services/Orders/UpdateOrdersService");

//! Create Orders
exports.CreateOrders = async (req, res) => {
  let result = await CreateOrdersService(req, OrdersModel);
  res.status(200).json(result);
};

//! Get Orders
exports.GetOrders = async (req, res) => {
  let result = await GetOrdersService(req, OrdersModel);
  res.status(200).json(result);
};
//! Get single Orders
exports.GetSingleOrders = async (req, res) => {
  let result = await GetSingleOrdersService(req, OrdersModel);
  res.status(200).json(result);
};

//! Update Orders
exports.UpdateOrders = async (req, res) => {
  let result = await UpdateOrdersService(req, OrdersModel);
  res.status(200).json(result);
};

//! Delete Orders
exports.DeleteOrders = async (req, res) => {
  let result = await DeleteOrdersService(req, OrdersModel);
  res.status(200).json(result);
};
//get order by single seller
exports.GetOrderBySingleSeller = async (req, res) => {
  let result = await GetOrderBySingleSellerService(req, OrdersModel);
  res.status(200).json(result);
};

//get order by single buyer 
exports.GetOrderBySingleBuyer = async (req,res) =>{
  let result = await GetOrderBySingleBuyerService(req,OrdersModel);
  res.status(200).json(result)
}

