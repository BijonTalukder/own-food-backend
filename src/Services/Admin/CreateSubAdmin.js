var md5 = require("md5");
const CreateSubAdmin = async (request, SubAdminModel) => {
  try {
    let postBody = request.body;

    const enPassword = md5(postBody.password);
    postBody.password = enPassword;

    let data = await SubAdminModel.create(postBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateSubAdmin;
