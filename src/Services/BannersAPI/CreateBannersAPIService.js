const CreateBannersAPIService = async (request, model) => {
  try {
    let postBody = request.body;
    let data = await model.create(postBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateBannersAPIService;
