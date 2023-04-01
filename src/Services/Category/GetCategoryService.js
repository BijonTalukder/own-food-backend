const GetCategroyService = async (request, Model) => {
  try {
    let data = await Model.aggregate([
      {
        // $project: {
        //   categoryName: 1,
        //   categoryImage: 1,
        //   categorySlug: 1,
        //   categoryStatus: 1,
        //   createdBy: 1,
        //   createdDate: 1,
        //   updatedBy: 1,
        //   updatedDate: 1,
        //   status:1
        // },
        $lookup: {
          from: "users",
          localField: "createdBy",
          foreignField: "_id",
          as: "createdbyuser",
          pipeline: [
            {
              $project: {
                userFullName: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "super-admins",
          localField: "createdBy",
          foreignField: "_id",
          as: "createdbysuperadmin",
          pipeline: [
            {
              $project: {
                firstName: 1,
                lastName: 1,
              },
            },
          ],
        },
      },
      {
        $lookup:{
          from: "sub-admins",
          localField: "createdBy",
          foreignField: "_id",
          as: "createdbysubadmin",
          pipeline: [
            {
              $project:{
                name:1
              }
            }
          ]
        }
      },


      //updated by joining
      {
      
        $lookup: {
          from: "users",
          localField: "updatedBy",
          foreignField: "_id",
          as: "updatedByuser",
          pipeline: [
            {
              $project: {
                userFullName: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "super-admins",
          localField: "updatedBy",
          foreignField: "_id",
          as: "updatedBysuperadmin",
          pipeline: [
            {
              $project: {
                firstName: 1,
                lastName: 1,
              },
            },
          ],
        },
      },
      {
        $lookup:{
          from: "sub-admins",
          localField: "updatedBy",
          foreignField: "_id",
          as: "updatedBysubadmin",
          pipeline: [
            {
              $project:{
                name:1
              }
            }
          ]
        }
      },
       
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetCategroyService;
