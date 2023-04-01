const mongoose = require("mongoose");
const GetSingleCategoryService = async (request, Model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await Model.aggregate([
      {
        $match: { _id: id },
      },

      {
        $lookup: {
          from: "subcategories",
          localField: "_id",
          foreignField: "categoryID",
          as: "subCategories",
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetSingleCategoryService;
