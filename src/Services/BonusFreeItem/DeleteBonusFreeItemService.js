const DeleteBonusFreeItemService = async (req, model) => {
  try {
    let id = req.params.id;

    let data = await model.remove({ _id: id });

    return { status: "success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = DeleteBonusFreeItemService;
