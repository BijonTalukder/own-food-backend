const UpdateSubCategoryService = async (request, model) => {
  try {
    let postBody = request.body;
    let id = request.params.id;
    let data = await model.updateOne(
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
module.exports = UpdateSubCategoryService;
