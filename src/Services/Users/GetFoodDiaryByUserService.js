const { default: mongoose } = require("mongoose");

const GetFoodDiaryByUserService = async (req,model)=>{
    try{
        let id = mongoose.Types.ObjectId(req.params.id)
        let data = await model.aggregate([
            {
                $match:{
                    _id:id
                }
            },
            {
                $lookup:{
                    from:"food-diaries",
                    localField:"_id",
                    foreignField:"userID",
                    as:"FoodDiaryData"
                }
            },
            {
             
                    $project:{
                        FoodDiaryData:1,
                        userFullName:1
                    }
               
            }

        ])

        return { status: "Success", data: data };
    }
    catch(e){
        return { status: "Fail", data: e };
    }

}
module.exports = GetFoodDiaryByUserService;