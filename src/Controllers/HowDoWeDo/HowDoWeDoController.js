const HowDoWeDoModel = require("../../Models/HowDoWeDo/HowDoWeDoModel");
const CreateHowDoWeDoService = require("../../Services/HowDoWeDo/CreateHowDoWeDoService");
const DeleteHowDoWeDoService = require("../../Services/HowDoWeDo/DeleteHowDoWeDoService");
const GetHowDoWeDoService = require("../../Services/HowDoWeDo/GetHowDoWeDoService");
const GetSingleHowDoWeDoService = require("../../Services/HowDoWeDo/GetSingleHowDoWeDoService");
const UpdateHowDoWeDoService = require("../../Services/HowDoWeDo/UpdateHowDoWeDoService");

//! Create how do we do
exports.CreateHowDoWeDo = async (req, res) => {
  let result = await CreateHowDoWeDoService(req, HowDoWeDoModel);
  res.status(200).json(result);
};

//! Get how do we do
exports.GetHowDoWeDo = async (req, res) => {
  let result = await GetHowDoWeDoService(req, HowDoWeDoModel);
  res.status(200).json(result);
};
//! Get single how do we do
exports.GetSingleHowDoWeDo = async (req, res) => {
  let result = await GetSingleHowDoWeDoService(req, HowDoWeDoModel);
  res.status(200).json(result);
};

//! Update how do we do
exports.UpdateHowDoWeDo = async (req, res) => {
  let result = await UpdateHowDoWeDoService(req, HowDoWeDoModel);
  res.status(200).json(result);
};

//! Delete how do we do
exports.DeleteHowDoWeDo = async (req, res) => {
  let result = await DeleteHowDoWeDoService(req, HowDoWeDoModel);
  res.status(200).json(result);
};
