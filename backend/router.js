import express from "express"

import { createUser, getUserById } from "./controllers/UserController.js"
import { createEvent, deleteEvent } from "./controllers/EventController.js"
import {
  getAllEvents,
  getEventById,
  getEventByUserId,
} from "./controllers/DashboardController.js"
import { store } from "./controllers/LoginController.js"
import {
  getRegistration,
  create,
} from "./controllers/RegistrationController.js"
import { approval } from "./controllers/ApprovalController.js"
import { rejection } from "./controllers/RejectionController.js"
import verifyToken from "./config/verifyToken.js"
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
router.get("/dashboard/:sport", verifyToken, getAllEvents)
router.get("/dashboard", verifyToken, getAllEvents)
router.get("/user/events", verifyToken, getEventByUserId)
router.get("/event/:eventId", verifyToken, getEventById)

//Events
// router.post("/event", upload.single("thumbnail"), createEvent)
router.delete("/event/:eventId", verifyToken, deleteEvent)
router.post("/event", verifyToken, createEvent)

//User
router.post("/user/register", createUser)
router.get("/user/:userId", getUserById)

export default router
