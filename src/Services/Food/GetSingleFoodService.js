const mongoose = require("mongoose");
const GetSingleFoodService = async (request, Model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await Model.aggregate([
      {
        $match: { _id: id },
      },
      {
        $facet: {
          Rows: [
            {
              $lookup: {
                from: "foodtypes",
                localField: "foodTypeID",
                foreignField: "_id",
                as: "foodtypesData",
              },
            },
            {
              $lookup: {
                from: "categorys",
                localField: "categoryID",
                foreignField: "_id",
                as: "categorysData",
              },
            },
          ],
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetSingleFoodService;
