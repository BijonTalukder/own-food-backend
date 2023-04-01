const { default: mongoose } = require("mongoose");

const GetSubCategoryBySingleCategoryService = async (req, model) => {
  try {
    let ID = mongoose.Types.ObjectId(req.params.id);
    let data = await model.aggregate([
      {
        $match: { _id: ID },
      },
      {
        $lookup:{
            from:"subcategories",
            localField:"_id",
            foreignField:"categoryID",
            as:"subcategoryData"
        }
      }
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetSubCategoryBySingleCategoryService;
