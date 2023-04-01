const { default: mongoose } = require("mongoose");
const GetSellerWithFoodDetailsService = async (req, model) => {
  try {
    let postBody = req.body;
    let data = await model.aggregate([
      {
        $match: {
          _id: {
            $in: postBody._id.map((x) => mongoose.Types.ObjectId(x)),
          },
        },
      },

      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "sellerID",
          as: "foodData",
          pipeline: [
            { $project: { _id: 1 } },
            { $group: { _id: null, count: { $sum: 1 } } },
          ],
        },
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetSellerWithFoodDetailsService;
