import express from "express";
import {
  getEvents,
  getEventById,
  getEventByRefId,
  submitInvite,
  getEventInvites,
  deleteEventInvite,
  createEvent,
} from "../controllers/eventControllers.js";
import { admin, protect } from "../middleware/authMiddleware.js";
import multer from "../utils/multer.js";

const router = express.Router();

// const upload = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cb) => {
//     let ext = path.extname(file.originalname);
//     if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//       cb(new Error("File type not supported"), false);
//       return;
//     }

//     cb(null, true);
//   },
//   limits: {
//     fileSize: 1024 * 1024 * 10,
//   },
// }).fields([
//   {
//     name: "image",
//     maxCount: 1,
//   },
//   {
//     name: "ticket",
//     maxCount: 1,
//   },
// ]);

router.route("/").get(getEvents).post(protect, createEvent);
router.route("/:id").get(getEventById);
router
  .route("/invites/:id")
  .get(getEventByRefId)
  .delete(protect, deleteEventInvite);
router.route("/submit-invite").post(submitInvite);
router.route("/create-event").post(
  multer.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "ticket",
      maxCount: 1,
    },
  ]),
  createEvent
);
router.route("/event-invites/:id").get(protect, getEventInvites);

export default router;
