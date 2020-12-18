import express from "express"
import cors from "cors"
const app = express()
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./routes/userRoute.js"
import eventRouter from "./routes/eventRoute.js"
import registrationRouter from "./routes/registrationRoute.js"

dotenv.config({ path: "./.env" })

try {
  mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  console.log(" Hello Mongo! ")
} catch (error) {
  console.log(error)
}

app.use(cors())
app.use(express.json())

// app.use("/files")
app.use(router)
app.use(eventRouter)
app.use(registrationRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Listening!!! ${PORT}`)
})
