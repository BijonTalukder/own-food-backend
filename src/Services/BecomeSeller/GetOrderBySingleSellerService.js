const { default: mongoose } = require("mongoose");

const GetOrderBySingleSellerService = async (req, model) => {
  try {
    let ID = mongoose.Types.ObjectId(req.params.id);
    let data = await model.aggregate([
      {
        $match: {
          _id: ID,
        },
      },
      {
        $lookup: {
          from: "orders",
          localField: "_id",
          foreignField: "sellerID",
          as: "orderinfo",
        },
      },
      {
        $project: {
          orderinfo: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetOrderBySingleSellerService;
