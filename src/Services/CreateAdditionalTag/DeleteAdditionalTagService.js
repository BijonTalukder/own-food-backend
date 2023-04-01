const DeleteAdditionalTagService = async (req, model) => {
  try {
    let id = req.params.id;
    let data = await model.remove({ _id: id });
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};
module.exports = DeleteAdditionalTagService;
