const UpdateAdditionalTagService = async (req, model) => {
  try {
    let postBody = req.body;
    let id = req.params.id;
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
module.exports = UpdateAdditionalTagService;
