import express from "express"
import { login } from "../controllers/loginCont.js"
import {
  getRegistration,
  Registration,
} from "../controllers/registrationCont.js"

const router = express.Router()

router.post("/registration/:event_id", Registration)
// router.get("/registration/auth/:registration_id", getRegistration)
router.get("/registration/:registration_id", getRegistration)
export default router
