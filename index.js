const express =require("express");
const app=express();
const mongoose =require("mongoose");

mongoose.connect('mongodb://localhost/Employee');




app.listen(30001,()=>{
    console.log("Server is running on PORT : 30001!");
})
