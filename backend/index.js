const port = 8000 //localhost port

//importing modules
const mongoose=require("mongoose");
const express=require("express");
const morgan = require("morgan");
const cors = require("cors");

//app creation and middlewares
const app=express()
app.use(express.json())
app.use(morgan("dev"));
app.use(cors("*"))




connectDb = async () => {
    try {
      await mongoose.connect('mongodb+srv://mernproject:123mernproj@cluster0.0bzl2wl.mongodb.net/projdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("db connected")
    } catch (error) {
      console.log(error.message)
    }
  }
  


  
  
  
  app.listen(port, () => {
    connectDb()
    console.log(`listening on port ${port} ! `);
  });