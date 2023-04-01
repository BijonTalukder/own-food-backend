const mongoose = require("mongoose");

const GetSingleSubCategoryService = async (request, model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await model.aggregate([
      {
        $match: { _id: id },
      },
      {
        $project: {
          categoryName: 1,
          categoryImage: 1,
          categorySlug: 1,
          categoryStatus: 1,
          createdBy: 1,
          createdDate: 1,
          updatedBy: 1,
          categoryID: 1,
          updatedDate: 1,
          status: 1,
        },
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetSingleSubCategoryService;
