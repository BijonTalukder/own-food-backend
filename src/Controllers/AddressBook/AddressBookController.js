const AddressBookModel = require("../../Models/AddressBook/AddressBookModel");
const CreateAddressBookService = require("../../Services/AddressBook/CreateAddressBookService");
const DeleteAddressBookService = require("../../Services/AddressBook/DeleteAddressBookService");
const GetAddressBookService = require("../../Services/AddressBook/GetAddressBookService");
const GetSingleAddressBookService = require("../../Services/AddressBook/GetSingleAddressBookService");
const UpdateAddressBookService = require("../../Services/AddressBook/UpdateAddressBookService");

//! Create AddressBook
exports.CreateAddressBook = async (req, res) => {
  let result = await CreateAddressBookService(req, AddressBookModel);
  res.status(200).json(result);
};

//! Get AddressBook
exports.GetAddressBook = async (req, res) => {
  let result = await GetAddressBookService(req, AddressBookModel);
  res.status(200).json(result);
};
//! Get single AddressBook
exports.GetSingleAddressBook = async (req, res) => {
  let result = await GetSingleAddressBookService(req, AddressBookModel);
  res.status(200).json(result);
};

//! Update AddressBook
exports.UpdateAddressBook = async (req, res) => {
  let result = await UpdateAddressBookService(req, AddressBookModel);
  res.status(200).json(result);
};

//! Delete AddressBook
exports.DeleteAddressBook = async (req, res) => {
  let result = await DeleteAddressBookService(req, AddressBookModel);
  res.status(200).json(result);
};
