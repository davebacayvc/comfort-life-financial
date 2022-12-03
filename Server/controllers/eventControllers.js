import Events from "../models/eventModel.js";
import expressAsync from "express-async-handler";
import EventInvite from "../models/eventInvitesModel.js";
import sendEmail from "../utils/sendNodeMail.js";
import eventInvitation from "../emailTemplates/event-invitation-template.js";
import checkBlankValue from "../utils/checkBlankValue.js";
import cloudinary from "../utils/cloudinary.js";
import multer from "../utils/multer.js";

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
  // const eventInvites = await EventInvite.find({});
  EventInvite.aggregate([
    {
      $lookup: {
        from: "events",
        localField: "eventId",
        foreignField: "_id",
        as: "eventsData",
      },
    },
  ]).exec((err, result) => {
    if (err) {
      res.json(err);
    }
    if (result) {
      res.send(result);
    }
  });
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
      referenceId: eventInvite.referenceId,
      title: event.title,
      ticket: event.ticket,
      description: event.description,
      event_date: event.createdAt,
      image: event.image,
      variant: event.variant,
      fullName: eventInvite.fullName,
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

  const events = await Events.findById(inviteeSave.eventId);

  const mailSubject = "Event Invitation";
  const mailContent = eventInvitation({
    referenceId: inviteeSave.referenceId,
    eventId: inviteeSave.eventId,
    eventName: events.title,
    eventDate: events.event_date,
    eventDescription: events.description,
    eventImage:
      "https://comfort-life-financial.vercel.app/assets/others/about-1.jpg",
    fullName: inviteeSave.fullName,
    mobileNumber: inviteeSave.mobileNumber,
    emailAddress: inviteeSave.emailAddress,
    agentNumber: checkBlankValue(inviteeSave.agentNumber),
    invitee: checkBlankValue(inviteeSave.invitee),
    remarks: checkBlankValue(inviteeSave.remarks),
    invitationLink: `http://localhost:3000/${inviteeSave.referenceId}`,
  });

  const mailAttachments = [
    {
      // file on disk as an attachment
      filename: "event-invitation.png",
      path: "https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gMknRO9FLBGWVkOTMKK_kFaoiYh8c0s4nSrH6ef5iGjzaD27zq7UlF8yDPqJInIF1muaayDgjXK0iFd94shdg1ZqwHwDQ=w1920-h961", // stream this file
      cid: "event-invitation.png",
    },
  ];
  const sendHTMLEmail = sendEmail(
    emailAddress,
    mailSubject,
    mailContent,
    mailAttachments
  )
    .then((response) => {
      console.log(response);
      response.send(response.message);
    })
    .catch((error) => res.status(500).send(error.message));

  if (inviteeSave || sendHTMLEmail) {
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
      eventName: events.title,
      eventImage: events.image,
      eventDescription: events.description,
      eventDate: events.event_date,
      eventTicket: events.ticket,
    });
  } else {
    res.status(400);
    throw new Error("Error occured in submission.");
  }
});

// @desc    Delete a event invite
// @route   DELETE /api/events/:id
// @access  Private/Admin
const deleteEventInvite = expressAsync(async (req, res) => {
  const eventInvite = await EventInvite.deleteOne({
    referenceId: req.params.id,
  });

  if (eventInvite) {
    res.json({ message: "Event invite removed." });
  } else {
    res.status(404);
    throw new Error("Event invite not found");
  }
});

// @desc    Create a event
// @route   POST /api/events/
// @access  Private/Admin
const createEvent = expressAsync(async (req, res) => {
  console.log(req.files);
  try {
    /** Upload image to cloudinary */
    const eventImgResult = await cloudinary.uploader.upload(
      req.files.image[0].path
    );
    const eventTicketResult = await cloudinary.uploader.upload(
      req.files.ticket[0].path
    );

    let event = new Events({
      user: "6387dea0938b9e17f8e5a2c3",
      title: req.body.title.toString(),
      date: new Date(),
      description: req.body.title.toString(),
      event_date: new Date(req.body.event_date),
      image: eventImgResult.secure_url,
      ticket: eventTicketResult.secure_url,
      ticket_cloudinary_id: eventTicketResult.public_id,
      image_cloudinary_id: eventImgResult.public_id,
      variant: "light",
    });

    await event.save();
    res.json(event);
  } catch (err) {
    console.log(err);
    res.status(404);
    throw new Error("Error occured in adding event.");
  }
});

export {
  getEvents,
  getEventById,
  getEventByRefId,
  submitInvite,
  getEventInvites,
  deleteEventInvite,
  createEvent,
};
