import Event from "../models/Event.js"

export const getEventById = async (req, res) => {
  const { eventId } = req.params
  try {
    const event = await Event.findById(eventId)

    if (event) {
      return res.json(event)
    }
  } catch (error) {
    return res.status(400).json({ message: "EventId does not exist!" })
  }
}
export const getAllEvents = async (req, res) => {
  const { sport } = req.params
  const query = { sport } || {}

  try {
    const events = await Event.find(query)

    if (events) {
      return res.json(events)
    }
  } catch (error) {
    return res.status(400).json({ message: "We do have any events yet" })
  }
}
