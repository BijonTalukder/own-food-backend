const RiderReviewModel = require("../../Models/RiderReview.js/RiderReviewModel");
const CreateRiderReviewService = require("../../Services/RiderReview/CreateRiderReviewService");
const DeleteRiderReviewService = require("../../Services/RiderReview/DeleteRiderReviewService");
const GetRiderReviewService = require("../../Services/RiderReview/GetRiderReviewService");
const GetSingleRiderReviewService = require("../../Services/RiderReview/GetSingleRiderReviewService");
const UpdateRiderReviewService = require("../../Services/RiderReview/UpdateRiderReviewService");

//! Create RiderReview
exports.CreateRiderReview = async (req, res) => {
  let result = await CreateRiderReviewService(req, RiderReviewModel);

  res.status(200).json(result);
};
//! get RiderReview
exports.GetRiderReview = async (req, res) => {
  let result = await GetRiderReviewService(req, RiderReviewModel);
  res.status(200).json(result);
};

//! get single RiderReview
exports.GetSingleRiderReview = async (req, res) => {
  let result = await GetSingleRiderReviewService(req, RiderReviewModel);
  res.status(200).json(result);
};

//! update RiderReview
exports.UpdateRiderReview = async (req, res) => {
  let result = await UpdateRiderReviewService(req, RiderReviewModel);
  res.status(200).json(result);
};
//! delete RiderReview

exports.DeleteRiderReview = async (req, res) => {
  let result = await DeleteRiderReviewService(req, RiderReviewModel);
  res.status(200).json(result);
};
