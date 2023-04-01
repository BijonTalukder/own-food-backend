const UpdateFoodReviewService = async (req,model)=>{
    try{
        let id = req.params.id
        let postBody=req.body;
        let data= await model.updateOne(
            {
                _id:id
            },
            postBody
        )
        return { status: "Success", data: data };


    }
    catch(e){
        return { status: "Fail", data: e };

    }

}
module.exports = UpdateFoodReviewService;
