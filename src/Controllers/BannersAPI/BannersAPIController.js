const BannersAPIModel = require("../../Models/BannersAPI/BannersAPIModel");
const CreateBannersAPIService = require("../../Services/BannersAPI/CreateBannersAPIService");
const DeleteBannersAPIService = require("../../Services/BannersAPI/DeleteBannersAPIService");
const GetBannersAPIService = require("../../Services/BannersAPI/GetBannersAPIService");
const GetSingleBannersAPIService = require("../../Services/BannersAPI/GetSingleBannersAPIService");
const UpdateBannersAPIService = require("../../Services/BannersAPI/UpdateBannersAPIService");

//create become a seller
exports.CreateBannersAPI = async (req, res) => {
  let result = await CreateBannersAPIService(req, BannersAPIModel);
  res.status(200).json(result);
};

//get become e seller
exports.GetBannersAPI = async (req, res) => {
  let result = await GetBannersAPIService(req, BannersAPIModel);
  res.status(200).json(result);
};

//get single become a seller
exports.GetSingleBannersAPI = async (req, res) => {
  let result = await GetSingleBannersAPIService(req, BannersAPIModel);
  res.status(200).json(result);
};

//update become a seller
exports.UpdateBannersAPI = async (req, res) => {
  let result = await UpdateBannersAPIService(req, BannersAPIModel);
  res.status(200).json(result);
};

//delete become a seller
exports.DeleteBannersAPI = async (req, res) => {
  let result = await DeleteBannersAPIService(req, BannersAPIModel);
  res.status(200).json(result);
};
