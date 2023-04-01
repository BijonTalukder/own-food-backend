const GetOrderStatusService = async (request, Model) => {
  try {
    let data = await Model.aggregate([
      {
        $project: {
          orderStatusTitle: 1,
          orderBy: 1,
          status: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetOrderStatusService;
