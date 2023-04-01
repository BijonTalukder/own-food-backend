const DiaryCommentsAndReplayModel = require("../../Models/DiaryCommentsAndReplay/DiaryCommentsAndReplayModel");
const CreateDiaryCommentsAndReplayService = require("../../Services/DiaryCommentsAndReplay/CreateDiaryCommentsAndReplayService");
const DeleteDiaryCommentsAndReplayService = require("../../Services/DiaryCommentsAndReplay/DeleteDiaryCommentsAndReplayService");
const GetDiaryCommentsAndReplayService = require("../../Services/DiaryCommentsAndReplay/GetDiaryCommentsAndReplayService");
const UpdateDiaryCommentsAndReplayService = require("../../Services/DiaryCommentsAndReplay/UpdateDiaryCommentsAndReplayService");


exports.CreateDiaryCommentsAndReplay = async (req,res) =>{
    let result = await CreateDiaryCommentsAndReplayService(req,DiaryCommentsAndReplayModel)
    res.status(200).json(result);
}
exports.GetDiaryCommentsAndReplay = async (req,res) =>{
    let result = await GetDiaryCommentsAndReplayService(req,DiaryCommentsAndReplayModel)
    res.status(200).json(result);
}
exports.UpdateDiaryCommentsAndReplay = async (req,res) =>{
    let result = await UpdateDiaryCommentsAndReplayService(req,DiaryCommentsAndReplayModel)
    res.status(200).json(result);
}   
exports.DeleteDiaryCommentsAndReplay = async (req,res) =>{
    let result = await DeleteDiaryCommentsAndReplayService(req,DiaryCommentsAndReplayModel)
    res.status(200).json(result);
}