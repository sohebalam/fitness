import Event from "../models/Event.js"
import jwt from "jsonwebtoken"

export const getEventById = (req, res) => {
  jwt.verify(req.token, "secret", async (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      const { eventId } = req.params
      try {
        const events = await Event.findById(eventId)

        if (events) {
          return res.json({ authData, events })
        }
      } catch (error) {
        return res.status(400).json({ message: "EventId does not exist!" })
      }
    }
  })
}
export const getAllEvents = (req, res) => {
  jwt.verify(req.token, "secret", async (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      const { sport } = req.params
      const query = sport ? { sport } : {}

      try {
        const events = await Event.find(query)

        if (events) {
          return res.json({ authData, events })
        }
      } catch (error) {
        return res.status(400).json({ message: "We do have any events yet" })
      }
    }
  })
}
export const getEventByUserId = (req, res) => {
  jwt.verify(req.token, "secret", async (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      const { user_id } = req.headers
      try {
        const events = await Event.find({ user: authData.user_id })

        if (events) {
          return res.json({ authData, events })
        }
      } catch (error) {
        return res
          .status(400)
          .json({ message: `User ${user_id} does not have any events` })
      }
    }
  })
}
