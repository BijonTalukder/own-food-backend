const UpdateDesignationService = async (request, UsersModel) => {
  try {
    let postBody = request.body;
    let id = request.params.id;
    let data = await UsersModel.updateOne(
      {
        _id: id,
      },
      postBody
    );
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = UpdateDesignationService;
