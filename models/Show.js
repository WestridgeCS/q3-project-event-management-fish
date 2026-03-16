import mongoose from "mongoose"

const showSchema = new mongoose.Schema({
  name:String,
  description:String,
  watched:Boolean,
  watchTime:String,
  comments:String,
  iconPath:String
})

export default mongoose.model("Show",showSchema)