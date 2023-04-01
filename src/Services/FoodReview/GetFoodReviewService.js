const GetFoodReviewService = async (req, model) => {
  try {
    let data = await model.aggregate([
      {
        $project: {
          reviewDetails: 1,
          reviewImage: 1,
          reviewVideo: 1,
          reviewStar: 1,
          date: 1,
          foodID: 1,
          orderID: 1,
          customerID: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetFoodReviewService;
