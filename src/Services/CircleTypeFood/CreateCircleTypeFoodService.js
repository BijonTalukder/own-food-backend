const CreateCircleTypeFoodService = async (request, Model) => {
  try {
    let postBody = request.body;
    let data = await Model.create(postBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateCircleTypeFoodService;
