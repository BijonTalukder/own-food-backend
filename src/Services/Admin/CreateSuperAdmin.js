const CreateSuperAdmin = async (request, SuperAdminModel) => {
  try {
    let postBody = request.body;
    let data = await SuperAdminModel.create(postBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateSuperAdmin;
