// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE MEETING MESSAGES ROUTES ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express')
const router = express.Router()
const meetingMessagesController = require('../../../controllers/meetingMessagesController')

// --------------------- ROUTES ---------------------
// Home Path
// TODO: Better organize the order of the routes
router.get('/', meetingMessagesController.meetingMessagesList)

// TODO: I might consider removing this route as I might have a duplicate in the meetings module
// Get all the messages from a meeting using its id
router.get('/:meeting_id', meetingMessagesController.getMeetingMessagesList)

// Create a new message from one user to the meeting chat
router.post('/:meeting_id/:message_from_id', meetingMessagesController.createNewMeetingMessage)

// Get a specific message from the meeting chat
router.get('/:meeting_id/:message_id', meetingMessagesController.getMeetingMessage)

// Delete a specific message from the meeting chat
router.delete('/:meeting_id/:message_id', meetingMessagesController.deleteMeetingMessage)

// Get a specific message's status
router.get('/:meeting_id/:message_id/status', meetingMessagesController.getMeetingMessageStatus)

// Update a specific message's status
router.put('/:meeting_id/:message_id', meetingMessagesController.updateMeetingMessageStatus)

module.exports = router
