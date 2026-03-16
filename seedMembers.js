import mongoose from "mongoose"
import dotenv from "dotenv"

import User from "./models/User.js"

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)

console.log("Connected to MongoDB")

// Clear existing members
await User.deleteMany()

console.log("Old members removed")


const members = [

{
  name: "Ava Martinez",
  username: "Ava_isCOOL",
  email: "ava.martinez@westridge.edu",
  passwordHash: null,
  role: "member"
},

{
  name: "Liam Chen",
  username: "LionMan",
  email: "liam.chen@westridge.edu",
  passwordHash: null,
  role: "member"
},

{
  name: "Sophia Patel",
  username: "TheFirstEver1st",
  email: "sophia.patel@westridge.edu",
  passwordHash: null,
  role: "member"
}

]


await User.insertMany(members)

console.log("Members seeded successfully")

mongoose.connection.close()