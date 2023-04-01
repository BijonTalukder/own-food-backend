const GetBonusFreeItemService = async (req, model) => {
  try {
    let data = await model.aggregate([
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
    return { status: "Fail", data: e };
  }
};

module.exports = GetBonusFreeItemService;
