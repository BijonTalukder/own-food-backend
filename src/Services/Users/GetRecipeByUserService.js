const { default: mongoose } = require("mongoose");

const GetRecipeByUserService = async (req,model)=>{
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
                    from:"recipes",
                    localField:"_id",
                    foreignField:"sellerID",
                    as:"FoodRecipeData"
                }
            },
            {
             
                    $project:{
                        FoodRecipeData:1,
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
module.exports = GetRecipeByUserService;