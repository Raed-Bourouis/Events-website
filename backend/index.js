const port = 8000 //localhost port

//importing modules
const mongoose=require("mongoose");
const express=require("express");
const morgan = require("morgan");
const cors = require("cors");

//importing routers
const eventRouter=require("./routers/Event")
const clientRouter=require("./routers/Client")
const commentRouter=require("./routers/comments")




//app creation and middlewares
const app=express()
app.use(express.json())
app.use(morgan("dev"));
app.use(cors("*"))
app.use('/events',eventRouter)
app.use('/users',clientRouter)
app.use('/comment',commentRouter)

//testing post --ignore this
// let ev={
//     title: "Concert Night",
//     artist: "The Band",
//     start: new Date('2024-06-01T19:00:00Z'),
//     end: new Date('2024-06-01T22:00:00Z')
// }

// app.post('/events', async (req,res)=>{
//     await eventSchema.create(req.body)
//     res.status(200).json({message:"created"})

// })

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