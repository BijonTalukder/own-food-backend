const UsersModel = require("../../Models/Users/UsersModel");
const OTPModel = require("../../Models/Users/OTPModel");
const CreateUsersService = require("../../Services/Users/CreateUsersService");
const DeleteUsersService = require("../../Services/Users/DeleteUsersService");
const GetSingleUsersService = require("../../Services/Users/GetSingleUsersService");
const GetUsersService = require("../../Services/Users/GetUsersService");
const UpdateUsersService = require("../../Services/Users/UpdateUsersService");
const VerifyForgetPassService = require("../../Services/Users/VerifyForgetPassService");
const UserVerifyOTPService = require("../../Services/Users/UserVerifyOTPService");
const UserResetPasswordService = require("../../Services/Users/UserResetPasswordService");
const LoginUser = require("../../Services/Users/LoginUser");
const GetFoodDiaryByUserService = require("../../Services/Users/GetFoodDiaryByUserService");

//! Create Users
exports.CreateUsers = async (req, res) => {
  let result = await CreateUsersService(req, UsersModel);
  res.status(200).json(result);
};

//! Login Supper Admin
exports.Login = async (req, res) => {
  let result = await LoginUser(req, UsersModel);
  res.status(200).json(result);
};

//! get Users
exports.GetUsers = async (req, res) => {
  let result = await GetUsersService(req, UsersModel);
  res.status(200).json(result);
};
//! update Users
exports.UpdateUsers = async (req, res) => {
  let result = await UpdateUsersService(req, UsersModel);
  res.status(200).json(result);
};
//! delete Users

exports.DeleteUsers = async (req, res) => {
  let result = await DeleteUsersService(req, UsersModel);
  res.status(200).json(result);
};

//! get single Users
exports.GetSingleUsers = async (req, res) => {
  let result = await GetSingleUsersService(req, UsersModel);
  res.status(200).json(result);
};

//! verify Email Address For forget Password
exports.ForgetPassVerifyEmail = async (req, res) => {
  let result = await VerifyForgetPassService(req, UsersModel);
  res.status(200).json(result);
};

//! User Verify OTP  Service Data Function
exports.VerifyOTPService = async (req, res) => {
  let result = await UserVerifyOTPService(req, OTPModel);
  res.status(200).json(result);
};

//! User Reset Password Service Data Function
exports.ResetPasswordService = async (req, res) => {
  let result = await UserResetPasswordService(req, UsersModel);
  res.status(200).json(result);
};




//get food diary by user 
exports.GetFoodDiaryByUser = async (req, res)=>{
  let result = await GetFoodDiaryByUserService(req,UsersModel);
  res.status(200).json(result);
}

//get recipes by user
 
exports.GetRecipeByUser = async (req, res)=>{
  let result = await GetRecipeByUserService(req,UsersModel);
  res.status(200).json(result);
}