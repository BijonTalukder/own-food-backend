const { default: mongoose } = require("mongoose");

const GetSingleFoodByReviewService = async (req,model) =>{
    try{
      let  ID=mongoose.Types.ObjectId(req.params.id)
      let data = await model.aggregate([
        {
            $match: { _id: ID },
          },
        {
            $lookup:{
                from:"food-reviwes",
                localField:"_id",
                foreignField:"foodID",
                as:"foodReviewData"
            }
        }

      ])

        return { status: "Success", data: data };
    } catch (e) {
      return { status: "Fail", data: e };
    }
}
module.exports = GetSingleFoodByReviewService