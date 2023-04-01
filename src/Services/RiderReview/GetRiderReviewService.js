const GetRiderReviewService = async (request, model) => {
  try {
    let data = await model.aggregate([
      {
        $project: {
          foodID: 1,
          orderID: 1,
          riderID: 1,
          reviewDetails: 1,
          reviewImage: 1,
          reviewVideo: 1,
          reviewStar: 1,
          reviewBy: 1,
          date: 1,
        },
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetRiderReviewService;
