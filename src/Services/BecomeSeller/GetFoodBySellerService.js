const { default: mongoose } = require("mongoose");

const GetFoodBySellerService = async (req, model) => {
  try {
    let ID = mongoose.Types.ObjectId(req.params.id);
    var limit = req.params.limit;
    if (limit == 0) {
      limit = 1000;
    }
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
          pipeline: [{ $limit: Number(limit) },
       ],
        },
          
      },
      {
        $project:{
          bankDetails:0
        }
      }
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetFoodBySellerService;
