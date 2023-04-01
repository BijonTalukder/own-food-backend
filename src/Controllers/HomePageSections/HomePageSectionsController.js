const HomePageSectionModel = require("../../Models/HomePageSections/HomePageSectionsModel");
const CreateHomepageSectionsService = require("../../Services/HomePageSections/CreateHomepageSectionsService");
const DeleteHomePageSectionsService = require("../../Services/HomePageSections/DeleteHomePageSectionsService");
const GetHomePageSectionsService = require("../../Services/HomePageSections/GetHomePageSectionsService");
const GetSingleHomePageSectionsService = require("../../Services/HomePageSections/GetSingleHomePageSectionsService");
const UpdateHomePageSectionsService = require("../../Services/HomePageSections/UpdateHomePageSectionsService");

//! Create Home page sections
exports.CreateHomepageSections = async (req, res) => {
  let result = await CreateHomepageSectionsService(req, HomePageSectionModel);
  res.status(200).json(result);
};

//! Get Home page sections
exports.GetHomePageSections = async (req, res) => {
  let result = await GetHomePageSectionsService(req, HomePageSectionModel);
  res.status(200).json(result);
};
//! Get single Home page sections
exports.GetSingleHomePageSections = async (req, res) => {
  let result = await GetSingleHomePageSectionsService(
    req,
    HomePageSectionModel
  );
  res.status(200).json(result);
};

//! Update Home page sections
exports.UpdateHomePageSections = async (req, res) => {
  let result = await UpdateHomePageSectionsService(req, HomePageSectionModel);
  res.status(200).json(result);
};

//! Delete Home page sections
exports.DeleteHomePageSections = async (req, res) => {
  let result = await DeleteHomePageSectionsService(req, HomePageSectionModel);
  res.status(200).json(result);
};
