import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name:String,
  username:String,
  email:String,
  passwordHash:String,
  role:{
    type:String,
    enum:["member","admin"]
  }
})

export default mongoose.model("User",userSchema)