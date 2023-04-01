const GetUsersService = async (request, model) => {
  try {
    let data = await model.aggregate([
      {
        $project: {
          email: 1,
          userFullName: 1,
          userPassword: 1,
          userName: 1,
          userEmail: 1,
          userMobileNo: 1,
          userPhoto: 1,
          userDateOfBirth: 1,
          userGender: 1,
          latitude: 1,
          longitude: 1,
          address: 1,
          zipCode: 1,
          cityID: 1,
          regionID: 1,
          countryID: 1,
          userTermsAgreed: 1,
          sellerStatus: 1,
          riderStatus: 1,
          rendingOTP: 1,
          activatedOTP: 1,
          userMobileVerified: 1,
          userEmailVerified: 1,
          status: 1,
          registrationDate: 1,
        },
      },
    ]);

    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetUsersService;
