//import the models
const Todo=require("../models/Todo");

//define route handler
exports.deleteTodo=async(req,res)=>{
            try{
              const {id}=req.params;
                    console.log("in the deletetodo");
              await Todo.findByIdAndDelete(id)

                //send json success flag m
                res.status(200).json(
                    {
                        // console.log("must");
                        success:true,
                        // data:todos,
                        message:"the datas deleted t",
                    }
                );

            }
            catch(err){
                console.error(err);
                console.log(err);
                res.status(500)
                .json({
                    success:false,
                    data:"internal server error",
                    message:err.message,
                })
            }

}