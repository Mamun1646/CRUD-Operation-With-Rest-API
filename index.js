const express = require("express");
const mongoose = require("mongoose");
const routes= require("./routes");
const app = express();

mongoose.connect('mongodb://localhost/Employee');
const con=mongoose.connection;
con.on("open",()=>{
    console.log("Connection is Established Succeded: ");
});
app.use(express.json());



app.use(routes);

app.listen(30001,()=>{
    console.log("Server is running on PORT : 30001!");
})
