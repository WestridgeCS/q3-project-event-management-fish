import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
  member:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  show:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Show"
  },
  comments:String,
  watched:Boolean
})

export default mongoose.model("Comment",commentSchema)