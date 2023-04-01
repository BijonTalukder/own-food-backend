const CreateAdditionalTagService = async (req, model) => {
  try {
    let postBody = req.body;
    let data = await model.create(postBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = CreateAdditionalTagService;
