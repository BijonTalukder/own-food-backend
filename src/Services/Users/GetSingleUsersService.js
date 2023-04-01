const mongoose = require("mongoose");

const GetSingleUsersService = async (request, model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await model.aggregate([
      {
        $match: { _id: id },
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetSingleUsersService;
