const GetAllSubAdmin = async (request, SubAdminModel) => {
  try {
    let postBody = request.body;
    let data = await SubAdminModel.aggregate([
      {
        $project: {
          email: 1,
          name: 1,
          role: 1,
          mobile: 1,
          photo: 1,
          country: 1,
          city: 1,
          zip: 1,
          designation: 1,
          address: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetAllSubAdmin;
