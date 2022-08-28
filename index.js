const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Connection with Mongodb
mongoose.connect("mongodb://localhost/Employee");
const con = mongoose.connection;

//Connection Checked
con.on("open", () => {
  console.log("Connection is Established Succeded: ");
});
app.use(express.json());
//using Routing
app.use(routes);
//App Run on Server 30001
app.listen(30001, () => {
  console.log("Server is running on PORT : 30001!");
});
