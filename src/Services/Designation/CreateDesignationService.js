const CreateDesignationService = async (request, DesignationModel) => {
  try {
    let postBody = request.body;
    let data = await DesignationModel.create(postBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateDesignationService;
