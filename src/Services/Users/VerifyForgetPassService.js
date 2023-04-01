const SendEmailUtility = require("../../Utility/SendEmailUtility");
const OTP = require("../../Models/Users/OTPModel");
const VerifyForgetPassService = async (request, dataModel) => {
  try {
    // Email Account Query
    let email = request.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000);

    // Database First Process
    let UserCount = await dataModel.aggregate([
      { $match: { email: email } },
      { $count: "total" },
    ]);

    if (UserCount.length > 0) {
      // Find OTP
      let optData = await OTP.aggregate([
        { $match: { email: email, status: 0 } },
        {
          $project: {
            email: 1,
            otp: 1,
            status: 1,
          },
        },
      ]);

      // Database Second Process

      if (optData.length > 0 && optData[0].status === 0) {
        // Send Email
        let SendEmail = await SendEmailUtility(
          email,
          "Your PIN Code is = " + optData[0].otp,
          "OwnFood PIN Verify"
        );
        return {
          status: "Success",
          data: { UserCount, optData },
          EmailSender: SendEmail,
        };
      } else {
        await OTP.create({ email: email, otp: OTPCode });
        // Send Email
        let SendEmail = await SendEmailUtility(
          email,
          "Your PIN Code is = " + OTPCode,
          "OwnFood PIN Verify"
        );
        return {
          status: "Success",
          data: { UserCount, optData },
          EmailSender: SendEmail,
        };
      }
    } else {
      return { status: "Fail", data: "No User Found" };
    }
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = VerifyForgetPassService;
