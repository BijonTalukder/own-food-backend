const { default: mongoose } = require("mongoose");

const GetSingleFoodDiaryService = async (req, model) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);
    let data = await model.aggregate([
      {
        $match: { _id: id },
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

module.exports = GetSingleFoodDiaryService;
