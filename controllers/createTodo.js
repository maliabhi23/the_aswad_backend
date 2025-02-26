//import the models
const Todo=require("../models/Todo");

//define route handler
exports.createTodo=async(req,res)=>{
            try{
                //extract the title description from body
                const{title,description}=req.body;
                //create neew todoand the  insert in the  dbase
                const response=await Todo.create({title,description});

                //send json success flag m
                res.status(200).json(
                    {
                        success:true,
                        data:response,
                        message:`Enter  y created successfully`
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