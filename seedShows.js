import mongoose from "mongoose"
import dotenv from "dotenv"

import College from "./models/College.js"

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to MongoDB")


await College.deleteMany({})
console.log("Old colleges cleared")

/*name:String,
  description:String,
  watched:Boolean,
  watchTime:String,
  comments:String,
  iconPath:String*/

const colleges = [
    
{
name: "Miraculous: Tales of Ladybug and Cat Noir",
description: "A show about the wonderful adventures of the superheros ladybug and chat noir!",
watchTime: "55 hours",
watched: False,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "Miraculous: Tales of Ladybug and Cat Noir",
description: "A show about the wonderful adventures of the superheros ladybug and chat noir!",
watchTime: "55 hours",
watched: False,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "Miraculous: Tales of Ladybug and Cat Noir",
description: "A show about the wonderful adventures of the superheros ladybug and chat noir!",
watchTime: "55 hours",
watched: False,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},
]


await College.insertMany(colleges)

console.log("Colleges seeded successfully")

mongoose.connection.close()