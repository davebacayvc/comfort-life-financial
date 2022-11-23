import express from "express";
import {
  getEvents,
  getEventById,
  getEventByRefId,
  submitInvite,
  getEventInvites,
} from "../controllers/eventControllers.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getEvents);
router.route("/:id").get(getEventById);
router.route("/invites/:id").get(getEventByRefId);
router.route("/submit-invite").post(submitInvite);
router.route("/event-invites/all").get(protect, getEventInvites);

export default router;
