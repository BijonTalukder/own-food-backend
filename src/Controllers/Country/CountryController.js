const CountryModel = require("../../Models/Country/CountryModel");
const CreateCountryService = require("../../Services/Country/CreateCountryService");
const DeleteCountryService = require("../../Services/Country/DeleteCountryService");
const GetCountryByAdminSelectedService = require("../../Services/Country/GetCountryByAdminSelectedService");
const GetCountryService = require("../../Services/Country/GetCountryService");
const GetFoodGroupByCountryService = require("../../Services/Country/GetFoodGroupByCountryService");
const GetSingleCountryService = require("../../Services/Country/GetSingleCountryService");
const UpdateCountryService = require("../../Services/Country/UpdateCountryService");

//! Create Country
exports.CreateCountry = async (req, res) => {
  let result = await CreateCountryService(req, CountryModel);
  res.status(200).json(result);
};

//! Get Country
exports.GetCountry = async (req, res) => {
  let result = await GetCountryService(req, CountryModel);
  res.status(200).json(result);
};
//! Get single Country
exports.GetSingleCountry = async (req, res) => {
  let result = await GetSingleCountryService(req, CountryModel);
  res.status(200).json(result);
};

//! Update Country
exports.UpdateCountry = async (req, res) => {
  let result = await UpdateCountryService(req, CountryModel);
  res.status(200).json(result);
};

//! Delete Country
exports.DeleteCountry = async (req, res) => {
  let result = await DeleteCountryService(req, CountryModel);
  res.status(200).json(result);
};

//! Get Food Group By Country
exports.GetFoodGroupByCountry = async (req, res) => {
  let result = await GetFoodGroupByCountryService(req, CountryModel);
  res.status(200).json(result);
};

//! Get Country By Admin selected
exports.GetCountryByAdminSelected = async (req, res) => {
  let result = await GetCountryByAdminSelectedService(req, CountryModel);
  res.status(200).json(result);
};
