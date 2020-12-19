import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from "./router.js"

import dotenv from "dotenv"
const app = express()

app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}
const PORT = process.env.PORT || 8000
try {
  mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDb connected successfully!")
} catch (error) {
  console.log(error)
}

app.use(router)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
