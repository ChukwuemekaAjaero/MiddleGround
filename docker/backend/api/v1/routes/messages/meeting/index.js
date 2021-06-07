// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE MEETING MESSAGES ROUTES ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express');
const router = express.Router();
const meeting_messages_controller = require('../../../controllers/meetingMessagesController')

// --------------------- ROUTES ---------------------
//Home Path
//TODO: Better organize the order of the routes
router.get('/', meeting_messages_controller.meeting_messages_list);

//TODO: I might consider removing this route as I might have a duplicate in the meetings module
//Get all the messages from a meeting using its id
router.get('/:meeting_id', meeting_messages_controller.get_meeting_messages_list);

//Create a new message from one user to the meeting chat
router.post('/:meeting_id/:message_from_id', meeting_messages_controller.create_new_meeting_message);

//Get a specific message from the meeting chat
router.get('/:meeting_id/:message_id', meeting_messages_controller.get_meeting_message);

//Delete a specific message from the meeting chat
router.delete('/:meeting_id/:message_id', meeting_messages_controller.delete_meeting_message);

//Get a specific message's status
router.get('/:meeting_id/:message_id/status', meeting_messages_controller.get_meeting_message_status);

//Update a specific message's status
router.put('/:meeting_id/:message_id', meeting_messages_controller.update_meeting_message_status);


module.exports = router;