import mongoose from "mongoose"

const RegistrationSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  sport: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
})

const Registration = mongoose.model("Registration", RegistrationSchema)

export default Registration
