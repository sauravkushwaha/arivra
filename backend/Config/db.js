import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();


// await mongoose.connect("mongodb://localhost:27017/")
const mongo_url = process.env.MONGO_CONN;

// console.log("url", mongo_url);
// console.log("url", process.env.MONGO_CONN);
    //Passward:  apXKDIHv1EPygXkD 
mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
    // console.log("DB connected success");
}).catch((err) =>{
    // console.log("db disconnected unsuccesfull", err);
})

