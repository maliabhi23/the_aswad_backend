const express=require("express");
const app=express();

const cors = require('cors');

app.use(cors());

//load config from env file
require("dotenv").config();
const PORT=process.env.PORT||4000;

//middleware to theparse json request
app.use(express.json());

//import routes for todo app api m
const todoRoutes=require("./routes/todos");
app.use(cors({ origin: 'http://localhost:3001'
             "https://theaswadhot.netlify.app",
             }));

//mount to do api routes 
app.use("/api/v1",todoRoutes);

//start server the
app.listen(PORT,()=>{
    console.log("Server created successfully ${PORT}")
})
// http://localhost:3000/api/v1/dummyLink
//connect to the database
const dbConnect=require("./config/database");
dbConnect();


//default route t
app.get("/",(req,res)=>{
    res.send(`<h1>this is the homepage</h1>`)
})

