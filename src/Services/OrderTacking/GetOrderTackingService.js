const GetOrderTackingService = async (request, Model) => {
  try {
    let data = await Model.aggregate([
      {
        $project: {
          orderID: 1,
          orderStatusID: 1,
          comment: 1,
          createdBy: 1,
          date: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetOrderTackingService;
