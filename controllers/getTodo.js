//import the models
const Todo=require("../models/Todo");

//define route handler
exports.getTodo=async(req,res)=>{
            try{
              
                const todos=await Todo.find({});

                //send json success flag m
                res.status(200).json(
                    {
                        success:true,
                        data:todos,
                        message:"Entire datas fet",
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

exports.getTodoById=async(req,res)=>{
    try{
const id=req.params.id;
const todo=await Todo.findById({_id:id});
//t t id not the found
if(!todo)
    {
        return res.status(400).json({
            success:false,
            message:"No Data found",
        })
    }    
    res.status(200).json({
        success:true,
        data:todo,
        message:"Find the ide"
    })


}
    catch(err)
    {

    }
}