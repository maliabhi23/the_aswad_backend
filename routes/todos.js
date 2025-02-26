const express=require("express");
const router=express.Router();

//import controller
const {createTodo}=require("../controllers/createTodo");
const{getTodo,getTodoById}=require("../controllers/getTodo");

const{UpdateTodo}=require("../controllers/UpdateTodo");

const{deleteTodo}=require("../controllers/deleteTodo");

const{dummyLink}=require("../controllers/dummydisplay");



//define api routes
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
router.delete("/deleteTodo/:id",deleteTodo);


//http://localhost:3000/api/v1/createTodo
//for the post m 
// {
//     "title":"ranue23",
//     "description":"may"
// }


//for the update
//t
//http://localhost:3000/api/v   1/UpdateTodo/677e941230cd9c50aacc51f5

//http://localhost:3000/api/v1/createTodo

//for the delete 
//http://localhost:3000/api/v1/deleteTodo/67851c41ba06cbf86fad1cae
//use the id them the m



//select the put 
// {
//     "title":"mm",
//     "description":"hello the them"
// }




//delete them the


// http://localhost:3000/api/v1/dummyLink
router.get("/dummyLink",dummyLink);

router.put("/UpdateTodo/:id",UpdateTodo);

console.log("gone to the deltet")

module.exports=router;