const { default: mongoose } = require("mongoose");

const GetFoodGroupByCountryService = async (req, model) => {
  try {
    let data = await model.aggregate([
      // match operator for get all data
      {
        $match: {},
      },

      //using lookup for  join country table  with food table
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "countryID",
          pipeline: [
            {
              $project: {
                cuisineCollection: 0,
              },
            },
          ],
          as: "FoodData",
        },
      },
      // using group operator for group joining data
      {
        $group: {
          _id: "$_id",
          countryName: { $first: "$countryName" },
          groups: {
            $push: "$FoodData",
          },
        },
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetFoodGroupByCountryService;
