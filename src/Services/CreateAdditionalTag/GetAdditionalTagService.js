const GetAdditionalTagService = async (req, model) => {
  try {
    let data = await model.aggregate([
      {
        $project: {
          tagID: 1,
          tagName: 1,
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

module.exports = GetAdditionalTagService;
