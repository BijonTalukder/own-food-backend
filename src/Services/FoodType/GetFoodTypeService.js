const GetFoodTypeService = async (request, Model) => {
  try {
    let data = await Model.aggregate([
      {
        $project: {
          foodTypeName: 1,
          foodTypeImage: 1,
          foodTypeCategories: 1,
          status: 1,
          createdBy: 1,
          createdDate: 1,
          default: 1,
          updatedBy: 1,
          updatedByDate: 1,
          updatedByDate: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetFoodTypeService;
