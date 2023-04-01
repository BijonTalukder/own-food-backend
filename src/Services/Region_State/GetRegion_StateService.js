const GetRegion_StateService = async (request, Model) => {
  try {
    let data = await Model.aggregate([
      {
        $project: {
          regionName: 1,
          regionImage: 1,
          regionThumb: 1,
          status: 1,
          countryID: 1,
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

module.exports = GetRegion_StateService;
