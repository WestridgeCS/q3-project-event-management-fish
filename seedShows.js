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
name: "My Little Pony",
description: "A super awesome adveture about friendship with the most awesome group of ponies minus fluttershy",
watchTime: "156 hours",
watched: false,
comments: "",
iconPath: "/uploads/showIcons/ucla.png"
},

{
name: "Peppa Pig",
description: "Pigs and others doing what pigs do best!",
watchTime: "208 hours",
watched: false,
comments: "",
iconPath: "/uploads/showIcons/ucla.png"
},

{
name: "Glitter Force",
description: "Magic girls!!!",
watchTime: "19 hours",
watched: false,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "PJ mask",
description: "Kids fighting other kids",
watchTime: "128 hours",
watched: false,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "Super Wing",
description: "talking planes delive packages and solves peoples external crisis",
watchTime: "272 hours",
watched: false,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "Pokemon the series: the beginning",
description: "kid who never grows up abuses animals by forces them to fight",
watchTime: "510 hours",
watched: false,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "Avatar the Last Airbender",
description: "Everything changed when the fire nation attacked",
watchTime: "30 hours",
watched: false,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
}
]


await Show.insertMany(shows)

console.log("Shows seeded successfully")

mongoose.connection.close()