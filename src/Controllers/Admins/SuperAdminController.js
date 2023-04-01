const SuperAdminModel = require("../../Models/Admin/SuperAdminModel");
const CreateSuperAdmin = require("../../Services/Admin/CreateSuperAdmin");
const LoginSuperAdmin = require("../../Services/Admin/LoginSuperAdmin");

//! Registration Supper Admin
exports.Registration = async (req, res) => {
  let result = await CreateSuperAdmin(req, SuperAdminModel);
  res.status(200).json(result);
};

//! Login Supper Admin
exports.Login = async (req, res) => {
  let result = await LoginSuperAdmin(req, SuperAdminModel);
  res.status(200).json(result);
};
