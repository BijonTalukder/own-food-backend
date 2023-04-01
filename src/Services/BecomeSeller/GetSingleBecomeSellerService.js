const { default: mongoose } = require("mongoose");

const GetSingleBecomeSellerService = async (req, model) => {
  try {
    let ID = mongoose.Types.ObjectId(req.params.id);
    let data = await model.aggregate([
      {
        $match: { _id: ID },
      },
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "sellerID",
          as: "foodData",
        },
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetSingleBecomeSellerService;
