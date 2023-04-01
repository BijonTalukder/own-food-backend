const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    quesTitle: { type: String },
    quesByBuyerID: { type: mongoose.Schema.Types.ObjectId },
    quesByBuyerName: { type: String },
    quesAnswers: [
      {
        Answer: { type: String },
        answerByBuyerID: { type: mongoose.Schema.Types.ObjectId },
        answerByBuyerName: { type: String },
        answerDateTime: { type: Date, default: Date.now },
        _id: false,
      },
    ],

    FoodID: { type: mongoose.Schema.Types.ObjectId },
  },
  { versionKey: false }
);

const BuyerQuestionsAndAnswearModel = mongoose.model(
  "buyer-question-and-answears",
  DataSchema
);
module.exports = BuyerQuestionsAndAnswearModel;
