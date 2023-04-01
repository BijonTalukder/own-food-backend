const GetHomePageSectionsService = async (req, model) => {
  try {
    let data = await model.aggregate([
      {
        $match: {},
      },
      { $sort: { orderBy: 1 } },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetHomePageSectionsService;
