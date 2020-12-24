import Event from "../models/Event.js"
import User from "../models/User.js"
import jwt from "jsonwebtoken"
export const createEvent = (req, res) => {
  jwt.verify(req.token, "secret", async (err, authData) => {
    const { title, description, price, sport, selectedFile, date } = req.body
    if (err) {
      res.statusCode(403)
    } else {
      const user = await User.findById(authData.user._id)

      if (!user) {
        return res.status(400).json({ message: "User does not exist!" })
      }

      const event = await Event.create({
        title,
        description,
        sport,
        price: parseFloat(price),
        user: authData.user._id,
        thumbnail: selectedFile,
        date,
      })

      return res.json(event)
    }
  })
}

export const deleteEvent = (req, res) => {
  jwt.verify(req.token, "secret", async (err, authData) => {
    if (err) {
      res.statusCode(403)
    } else {
      const { eventId } = req.params
      try {
        await Event.findByIdAndDelete(eventId)
        return res.status(204).send()
      } catch (error) {
        return res
          .status(400)
          .json({ message: "We do have any event with the ID" })
      }
    }
  })
}
