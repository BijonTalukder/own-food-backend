const CouponModel = require("../../Models/Coupon/CouponModel");
const CreateCouponService = require("../../Services/Coupon/CreateCouponService");
const DeleteCouponService = require("../../Services/Coupon/DeleteCouponService");
const GetCouponService = require("../../Services/Coupon/GetCouponService");
const GetSingleCouponService = require("../../Services/Coupon/GetSingleCouponService");
const UpdateCouponService = require("../../Services/Coupon/UpdateCouponService");

//! Create Coupon
exports.CreateCoupon = async (req, res) => {
  let result = await CreateCouponService(req, CouponModel);
  res.status(200).json(result);
};

//! Get Coupon
exports.GetCoupon = async (req, res) => {
  let result = await GetCouponService(req, CouponModel);
  res.status(200).json(result);
};
//! Get single Coupon
exports.GetSingleCoupon = async (req, res) => {
  let result = await GetSingleCouponService(req, CouponModel);
  res.status(200).json(result);
};

//! Update Coupon
exports.UpdateCoupon = async (req, res) => {
  let result = await UpdateCouponService(req, CouponModel);
  res.status(200).json(result);
};

//! Delete Coupon
exports.DeleteCoupon = async (req, res) => {
  let result = await DeleteCouponService(req, CouponModel);
  res.status(200).json(result);
};
