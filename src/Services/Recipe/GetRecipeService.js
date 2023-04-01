const GetRecipeService = async (req, model) => {
  try {
    let data = await model.aggregate([
      {
        $lookup:
          {
            from: "become-a-sellers",
            localField: "sellerID",
            foreignField: "_id",
            as: "seller",
            pipeline: [
              {
                $project: {
                  _id: 1,
                  kitchenName: 1,
                  sellerProfilePhoto: 1,
                },
              },
            ]
          }
    },
    {
        $lookup:
           {
             from: "users",
             localField: "sellerID",
             foreignField: "_id",
             as: "user",
             pipeline: [
              {
                $project: {
                  _id: 1,
                  userFullName: 1,
                  userPhoto: 1,
                  userName: 1
                },
              },
            ]
           }
     },
      
     {
      $addFields: {
        recipePostedBy: { $ifNull: [ { $arrayElemAt: [ "$seller", 0 ] }, { $arrayElemAt: [ "$user", 0 ] } ] }
      }
    }
    


      
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetRecipeService;