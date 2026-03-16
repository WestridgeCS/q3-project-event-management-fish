import mongoose from "mongoose"
import dotenv from "dotenv"

import Show from "./models/Show.js"

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to MongoDB")


await Show.deleteMany({})
console.log("Old shows cleared")

/*name:String,
  description:String,
  watched:Boolean,
  watchTime:String,
  comments:String,
  iconPath:String*/

const shows = [

{
name: "Miraculous: Tales of Ladybug and Cat Noir",
description: "A show about the wonderful adventures of the superheros ladybug and chat noir!",
watchTime: "55 hours",
watched: false,
comments: "",
iconPath: "/uploads/showIcons/ucla.png"
},

{
name: "Miraculous: Tales of Ladybug and Cat Noir",
description: "A show about the wonderful adventures of the superheros ladybug and chat noir!",
watchTime: "55 hours",
watched: false,
comments: "",
iconPath: "/uploads/showIcons/ucla.png"
},

{
name: "Miraculous: Tales of Ladybug and Cat Noir",
description: "A show about the wonderful adventures of the superheros ladybug and chat noir!",
watchTime: "55 hours",
watched: false,
comments: "",
iconPath: "/uploads/showIcons/ucla.png"
},
]


await Show.insertMany(shows)

console.log("Shows seeded successfully")

mongoose.connection.close()