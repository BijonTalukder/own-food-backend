const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    comment: { type: String },
    reply: [
      {
        replyText: { type: String },
        replyDate: { type: Date,default:Date.now()},
        replyUserID: { type: mongoose.Schema.Types.ObjectId },
        replyUserName:{type: String},

      }
    ],
    userID: { type: mongoose.Schema.Types.ObjectId },
    diaryID: { type: mongoose.Schema.Types.ObjectId },
    diaryImage:{type: String},
    Date: { type: Date,default:Date.now() },
  },
  { versionKey: false }
);
const DiaryCommentsAndReplayModel = mongoose.model(
  "DiaryCommentsAndReplays",
  DataSchema
);
module.exports = DiaryCommentsAndReplayModel;
