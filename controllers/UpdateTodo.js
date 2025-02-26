//import the models


const Todo=require("../models/Todo");

//define route handler
exports.UpdateTodo=async(req,res)=>{
            try{
              
            const {id}=req.params;
            const {title,description}=req.body;

            const todo=await Todo.findByIdAndUpdate(
             {_id:id},
             {title,description,updatedAt:Date.now()},
            )


                //send json success flag m
                res.status(200).json(
                    {
                        success:true,
                        //data:response,
                        message:"Updated successfully  ",
                    }
                )
             }
            catch(err){
                console.error(err);
                console.log(err);
                res.status(500)
                .json({
                    success:false,
                    data:"internal server error",
                    message:err.message,
                });
            }

}