import mongoose from "mongoose"
import dotenv from "dotenv"

import College from "./models/College.js"
import Show from "./models/Show.js"

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)
console.log("Connected to MongoDB")


await College.deleteMany({})
console.log("Old colleges cleared")
await Show.deleteMany({})
console.log("Old shows cleared")

/*name:String,
  description:String,
  watched:Boolean,
  watchTime:String,
  comments:String,
  iconPath:String*/

const colleges = [
    
const shows = [

{
name: "Miraculous: Tales of Ladybug and Cat Noir",
description: "A show about the wonderful adventures of the superheros ladybug and chat noir!",
watchTime: "55 hours",
watched: False,
watched: false,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
iconPath: "/uploads/showIcons/ucla.png"
},

{
<<<<<<< HEAD
name: "My Little Pony",
description: "A super awesome adveture about friendship with the most awesome group of ponies minus fluttershy",
watchTime: "156 hours",
watched: False,
=======
name: "Miraculous: Tales of Ladybug and Cat Noir",
description: "A show about the wonderful adventures of the superheros ladybug and chat noir!",
watchTime: "55 hours",
watched: false,
>>>>>>> a385a351c096ef286d26e8b03e0449b0e9674fe3
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
iconPath: "/uploads/showIcons/ucla.png"
},

{
<<<<<<< HEAD
name: "Peppa Pig",
description: "Pigs and others doing what pigs do best!",
watchTime: "208 hours",
watched: False,
=======
name: "Miraculous: Tales of Ladybug and Cat Noir",
description: "A show about the wonderful adventures of the superheros ladybug and chat noir!",
watchTime: "55 hours",
watched: false,
>>>>>>> a385a351c096ef286d26e8b03e0449b0e9674fe3
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
iconPath: "/uploads/showIcons/ucla.png"
},

{
name: "Glitter Force",
description: "Magic girls!!!",
watchTime: "19 hours",
watched: False,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "PJ mask",
description: "Kids fighting other kids",
watchTime: "128 hours",
watched: False,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "Super Wing",
description: "talking planes delive packages and solves peoples external crisis",
watchTime: "272 hours",
watched: False,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "Pokemon the series: the beginning",
description: "kid who never grows up abuses animals by forces them to fight",
watchTime: "510 hours",
watched: False,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
},

{
name: "Avatar the Last Airbender",
description: "Everything changed when the fire nation attacked",
watchTime: "30 hours",
watched: False,
comments: "",
iconPath: "/uploads/collegeIcons/ucla.png"
}
]


await College.insertMany(colleges)
await Show.insertMany(shows)

console.log("Colleges seeded successfully")
console.log("Shows seeded successfully")

mongoose.connection.close()