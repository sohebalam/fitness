import mongoose from "mongoose"

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  sport: String,
  selectedFile: String,
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

const Event = mongoose.model("Event", EventSchema)

export default Event
