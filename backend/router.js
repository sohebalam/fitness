import express from "express"

import { createUser, getUserById } from "./controllers/UserController.js"
import { createEvent, deleteEvent } from "./controllers/EventController.js"
import {
  getAllEvents,
  getEventById,
} from "./controllers/DashboardController.js"
import { store } from "./controllers/LoginController.js"
import {
  getRegistration,
  create,
} from "./controllers/RegistrationController.js"
import { approval } from "./controllers/ApprovalController.js"
import { rejection } from "./controllers/RejectionController.js"
const router = express.Router()

router.get("/status", (req, res) => {
  res.send({ status: 200 })
})

//TODO: SubscribeController
//TODO: ApprovalController
//TODO: RejectionController

//Registration
router.post("/registration/:eventId", create)
router.get("/registration/:registration_id", getRegistration)
router.post("/registration/:registration_id/approvals", approval)
router.post("/registration/:registration_id/rejections", rejection)

//Login
router.post("/login", store)

//Dashboard
router.get("/dashboard/:sport", getAllEvents)
router.get("/dashboard", getAllEvents)
router.get("/event/:eventId", getEventById)

//Events
// router.post("/event", upload.single("thumbnail"), createEvent)
router.delete("/event/:eventId", deleteEvent)
router.post("/event", createEvent)

//User
router.post("/user/register", createUser)
router.get("/user/:userId", getUserById)

export default router
