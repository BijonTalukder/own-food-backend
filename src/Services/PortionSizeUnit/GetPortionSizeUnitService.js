const GetPortionSizeUnitService = async (request, Model) => {
  try {
    let data = await Model.aggregate([
      {
        $project: {
          sizeUnitName: 1,
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

module.exports = GetPortionSizeUnitService;
