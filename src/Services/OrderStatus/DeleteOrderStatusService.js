const DeleteOrderStatusService = async (request, Model) => {
  try {
    let DeleteID = request.params.id;
    let QueryObject = {};
    QueryObject["_id"] = DeleteID;

    let Delete = await Model.remove(QueryObject);
    return {
      status: "Success",
      data: Delete,
    };
  } catch (e) {
    console.log("Data");
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = DeleteOrderStatusService;
