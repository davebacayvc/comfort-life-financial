import Events from "../models/eventModel.js";
import expressAsync from "express-async-handler";
import EventInvite from "../models/eventInvitesModel.js";

/**
 * @desc: Fetch all events
 * @route: GET /api/events
 * @acess: Public
 */
const getEvents = expressAsync(async (req, res) => {
  const events = await Events.find({});
  res.json(events);
});

/**
 * @desc: Fetch single event by id
 * @route: GET /api/events/:id
 * @acess: Public
 */
const getEventById = expressAsync(async (req, res) => {
  const events = await Events.find({ _id: req.params.id });
  if (events.length !== 0) {
    res.json(events);
  } else {
    res.status(404);
    throw new Error("Event not found.");
  }
});

/**
 * @desc: Fetch all event invites
 * @route: GET /api/events/invites
 * @acess: Private
 */
const getEventInvites = expressAsync(async (req, res) => {
  const eventInvites = await EventInvite.find({});
  res.json(eventInvites);
});

/**
 * @desc: Fetch event invite
 * @route: GET /api/events/invites/:id
 * @acess: Public
 */
const getEventByRefId = expressAsync(async (req, res) => {
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
    res.status(404);
    throw new Error("Invite not found.");
  }
});

/**
 * @desc: Submit a invite
 * @route: POST /api/events/submit-invite
 * @acess: Public
 */
const submitInvite = expressAsync(async (req, res) => {
  const {
    fullName,
    mobileNumber,
    emailAddress,
    agentNumber,
    invitee,
    remarks,
    referenceId,
    eventId,
  } = req.body;

  const inviteeSave = await EventInvite.create({
    fullName,
    mobileNumber,
    emailAddress,
    agentNumber,
    invitee,
    remarks,
    referenceId,
    eventId,
  });

  if (inviteeSave) {
    res.status(201).json({
      _id: inviteeSave._id,
      fullName: inviteeSave.fullName,
      mobileNumber: inviteeSave.mobileNumber,
      emailAddress: inviteeSave.emailAddress,
      agentNumber: inviteeSave.agentNumber,
      invitee: inviteeSave.invitee,
      remarks: inviteeSave.remarks,
      referenceId: inviteeSave.referenceId,
      eventId: inviteeSave.eventId,
    });
  } else {
    res.status(400);
    throw new Error("Error occured in submission.");
  }
});

export {
  getEvents,
  getEventById,
  getEventByRefId,
  submitInvite,
  getEventInvites,
};
