const CreateRecipeCategoryService = async (req, model) => {
    try {
      postBody = req.body;
      let data = await model.create(postBody);
      return { status: "Success", data: data };
    } catch (e) {
      return { status: "Fail", data: e };
    }
  };
  module.exports = CreateRecipeCategoryService;
  