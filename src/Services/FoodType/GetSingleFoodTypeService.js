const mongoose = require("mongoose");
const GetSingleFoodTypeService = async (request, Model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await Model.aggregate([
      {
        $match: { _id: id },
      },
      {
        $project: {
          foodTypeName: 1,
          foodTypeImage: 1,
          foodTypeCategories: 1,
          status: 1,
          createdBy: 1,
          createdDate: 1,
          updatedBy: 1,
          updatedByDate: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetSingleFoodTypeService;
