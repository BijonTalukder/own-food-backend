const GetIngrediantsService = async (request, Model) => {
  try {
    let data = await Model.aggregate([
      {
        $project: {
          ingredientID: 1,
          ingredientName: 1,
          ingredientImage: 1,
          ingredientThumb: 1,
          ingredientQty: 1,
          status: 1,
          cuisineID: 1,
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

module.exports = GetIngrediantsService;
