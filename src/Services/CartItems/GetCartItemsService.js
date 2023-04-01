const GetCartItemsService = async (request, Model) => {
  try {
    let data = await Model.aggregate([
      {
        $project: {
          foodID: 1,
          customerID: 1,
          foodName: 1,
          foodQty: 1,
          foodUnitPrice: 1,
          foodTotalPrice: 1,
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

module.exports = GetCartItemsService;
