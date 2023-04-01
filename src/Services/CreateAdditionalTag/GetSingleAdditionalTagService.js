const { default: mongoose } = require("mongoose");

const GetSingleAdditionalTagService = async (req, model) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);

    let data = await model.aggregate([
      {
        $match: { _id: id },
      },
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
    return { status: "Fail", data: e.toString() };
  }
};
module.exports = GetSingleAdditionalTagService;
