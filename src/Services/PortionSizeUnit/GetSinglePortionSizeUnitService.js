const mongoose = require("mongoose");
const GetSinglePortionSizeUnitService = async (request, Model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await Model.aggregate([
      {
        $match: { _id: id },
      },
      {
        $project: {
          sizeUnitName: 1,
          status: 1,
          createdBy: 1,
          createdDate: 1,
          updatedBy: 1,
          updatedDate: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetSinglePortionSizeUnitService;
