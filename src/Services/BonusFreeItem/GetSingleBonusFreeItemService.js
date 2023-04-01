const { default: mongoose } = require("mongoose");

const GetSingleBonusFreeItemService = async (req, model) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);

    let data = await model.aggregate([
      {
        $match: { _id: id },
      },
      {
        $project: {
          bonusFreeItemName: 1,
          bonusFreeItemImage: 1,
          bonusFreeItemThum: 1,
          bonusFreeItemVideo: 1,
          sellerID: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = GetSingleBonusFreeItemService;
