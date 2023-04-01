const GetAllDesignationService = async (request, DesignationModel) => {
  try {
    let data = await DesignationModel.aggregate([
      {
        $project: {
          name: 1,
          status: 1,
          mobile: 1,
          createdBy: 1,
          createdDate: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetAllDesignationService;
