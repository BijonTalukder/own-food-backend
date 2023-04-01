const { default: mongoose } = require("mongoose");
const GetCountryByAdminSelectedService = async (req, model) => {
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
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetCountryByAdminSelectedService;
