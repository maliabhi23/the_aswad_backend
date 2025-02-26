const mongoose=require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    //connnect betwen db and application m 
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("Db connected succe")})
    .catch((error)=>{console.log("Cant establish the connection t");
    console.log(error.message);
    process.exit(1);

    });


}

module.exports=dbConnect;