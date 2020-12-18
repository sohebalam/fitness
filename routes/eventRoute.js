import express from "express"

import {
  createEvent,
  deleteEvent,
  getAllEvent,
  getEvent,
} from "../controllers/EventCont.js"

const router = express.Router()

router.post("/event", createEvent)

router.get("/events", getAllEvent)
router.get("/event/:event_id", getEvent)
router.delete("/event/:event_id", deleteEvent)

export default router
