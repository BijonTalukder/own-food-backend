const GetOrdersService = async (request, Model) => {
  try {
    let data = await Model.aggregate([
      {
        $project: {
          orderDeliveryAddressID: 1,
          orderBillingAddressID: 1,
          orderStatusID: 1,
          customerID: 1,
          orderNumber: 1,
          orderNotes: 1,
          orderTotalAmount: 1,
          orderDate: 1,
          paymentDate: 1,
          orderItems: 1,
          paymentType: 1,
          sellerID:1
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetOrdersService;
