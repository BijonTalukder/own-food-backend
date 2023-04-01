const BuyerQuestionsAndAnswearModel = require("../../Models/BuyerQuestionsAndAnswear/BuyerQuestionsAndAnswearModel");
const CreateBuyerQuestionsAndAnswearService = require("../../Services/BuyerQuestionsAndAnswear/CreateBuyerQuestionsAndAnswearService");
const DeleteBuyerQuestionsAndAnswearService = require("../../Services/BuyerQuestionsAndAnswear/DeleteBuyerQuestionsAndAnswearService");
const GetBuyerQuestionsAndAnswearService = require("../../Services/BuyerQuestionsAndAnswear/GetBuyerQuestionsAndAnswearService");
const GetSingleBuyerQuestionsAndAnswearService = require("../../Services/BuyerQuestionsAndAnswear/GetSingleBuyerQuestionsAndAnswearService");
const UpdateBuyerQuestionsAndAnswearService = require("../../Services/BuyerQuestionsAndAnswear/UpdateBuyerQuestionsAndAnswearService");

//! Create BuyerQuestionsAndAnswear
exports.CreateBuyerQuestionsAndAnswear = async (req, res) => {
  let result = await CreateBuyerQuestionsAndAnswearService(
    req,
    BuyerQuestionsAndAnswearModel
  );
  res.status(200).json(result);
};
//! Get BuyerQuestionsAndAnswear
exports.GetBuyerQuestionsAndAnswear = async (req, res) => {
  let result = await GetBuyerQuestionsAndAnswearService(
    req,
    BuyerQuestionsAndAnswearModel
  );
  res.status(200).json(result);
};

//! Get single BuyerQuestionsAndAnswear
exports.GetSingleBuyerQuestionsAndAnswear = async (req, res) => {
  let result = await GetSingleBuyerQuestionsAndAnswearService(
    req,
    BuyerQuestionsAndAnswearModel
  );
  res.status(200).json(result);
};

//! Update BuyerQuestionsAndAnswear
exports.UpdateBuyerQuestionsAndAnswear = async (req, res) => {
  let result = await UpdateBuyerQuestionsAndAnswearService(
    req,
    BuyerQuestionsAndAnswearModel
  );
  res.status(200).json(result);
};

//! Delete BuyerQuestionsAndAnswear
exports.DeleteBuyerQuestionsAndAnswear = async (req, res) => {
  let result = await DeleteBuyerQuestionsAndAnswearService(
    req,
    BuyerQuestionsAndAnswearModel
  );
  res.status(200).json(result);
};
