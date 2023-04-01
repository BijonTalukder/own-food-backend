const DeleteRiderReviewService = async (request, model) => {
  try {
    let Delete = await model.remove({ _id: request.params.id });
    return {
      status: "Success",
      data: Delete,
    };
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = DeleteRiderReviewService;
