import express from "express";
import { register, getUser } from "../controllers/userCont.js";

const router = express.Router();

router.post("/user/register", register);
router.get("/user/:id", getUser);

export default router;
