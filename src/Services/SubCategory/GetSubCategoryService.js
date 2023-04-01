const GetSubCategoryService = async (request, model) => {
  try {
    let data = await model.aggregate([
      {
        $project: {
          categoryName: 1,
          categoryName: 1,
          categoryImage: 1,
          categorySlug: 1,
          status: 1,
          categoryID: 1,
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
module.exports = GetSubCategoryService;
