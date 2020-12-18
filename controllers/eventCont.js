import Event from "../models/EventModel.js"
import User from "../models/UserModel.js"

export const createEvent = async (req, res) => {
  const { title, description, price, selectedFile } = req.body
  const { id } = req.headers

  const user = await User.findById(id)

  if (!user) {
    return res.status(400).json({ message: "User does not exist!" })
  }
  const event = await Event.create({
    title,
    description,
    price: parseFloat(price),
    user: id,
    selectedFile,
  })
  return res.json(event)
}

export const getEvent = async (req, res) => {
  const { event_id } = req.params
  try {
    const event = await Event.findById(event_id)

    if (event) {
      return res.json(event)
    }
  } catch (error) {
    return res.status(400).json({ message: "Event does not exist!" })
  }
}

export const getAllEvent = async (req, res) => {
  try {
    const events = await Event.find()

    res.status(200).json(events)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deleteEvent = async (req, res) => {
  const { event_id } = req.params
  try {
    const events = await Event.findByIdAndDelete(event_id)

    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: "no event found" })
  }
}
