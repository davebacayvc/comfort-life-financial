import express from "express";
import Events from "../models/eventModel.js";
import EventInvite from "../models/eventInvitesModel.js";
import expressAsync from "express-async-handler";

const router = express.Router();

/**
 * @desc: Fetch all events
 * @route: GET /api/events
 * @acess: Public
 */
router.get(
  "/",
  expressAsync(async (req, res) => {
    const events = await Events.find({});
    res.json(events);
  })
);

/**
 * @desc: Fetch event invite
 * @route: GET /api/events/invites/:id
 * @acess: Public
 */
router.get(
  "/invites/:id",
  expressAsync(async (req, res) => {
    const eventInvite = await EventInvite.findOne({
      referenceId: req.params.id,
    });
    const event = await Events.findById(eventInvite.eventId);

    if (eventInvite) {
      res.json({
        id: eventInvite._id,
        date: eventInvite.date,
        eventId: eventInvite.eventId,
        invitee: eventInvite.invitee,
        referenceId: eventInvite.referenceId,
        title: event.title,
        description: event.description,
        event_date: event.event_date,
        image: event.image,
        variant: event.variant,
        fullName: event.fullName,
        mobileNumber: event.mobileNumber,
        emailAddress: event.emailAddress,
        agentNumber: event.agentNumber,
        remarks: event.remarks,
      });
    } else {
      res.status(404).json({
        message: "Invite not found.",
      });
    }
  })
);

/**
 * @desc: Submit a invite
 * @route: POST /api/events/submitInvite
 * @acess: Public
 */
router.post(
  "/submitInvite",
  expressAsync(async (req, res) => {
    console.log(req);
    const eventInvite = await EventInvite.create({
      fullName: req.body.fullName,
      mobileNumber: req.body.mobileNumber,
      emailAddress: req.body.emailAddress,
      agentNumber: req.body?.agentNumber,
      invitee: req.body?.invitee,
      remarks: req.body?.remarks,
    });

    if (eventInvite) {
      res.status(200).json(eventInvite);
    } else {
      res.status(404).json({
        message: "Invite error.",
      });
    }
  })
);

export default router;
