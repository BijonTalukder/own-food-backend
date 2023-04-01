const CreateToken = require("../../Utility/CreateToken");

const LoginUser = async (request, UsersModel) => {
  try {
    let data = await UsersModel.aggregate([
      { $match: request.body },
      {
        $lookup: {
          from: "become-a-sellers",
          localField: "_id",
          foreignField: "sellerID",
          as: "sellerIDInfo",
          pipeline:[
            {
              $project:{
                sellerID:1
              }
            }
          ]
        },
      },
      {
        $project:{
         _id: 1,
          email: 1,
          userFullName: 1,
          userName: 1,
          userMobileNo: 1,
          userPhoto: 1,
          sellerIDInfo:1
        }
      }
    ]);
    if (data.length > 0) {
      let Token = await CreateToken(data[0]["email"]);
      return { status: "Success", Token: Token, data: data[0] };
    } else {
      return { status: "Unauthorized" };
    }
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = LoginUser;
