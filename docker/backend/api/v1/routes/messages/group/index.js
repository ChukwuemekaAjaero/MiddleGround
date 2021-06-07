// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE GROUP MESSAGES ROUTES ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express');
const router = express.Router();
const group_messages_controller = require('../../../controllers/groupMessagesController')

// --------------------- ROUTES ---------------------

//Home Path
//TODO: Better organize the order of the routes
router.get('/', group_messages_controller.group_messages_list);

//Get all the messages from a group using its id
router.get('/:group_id', group_messages_controller.get_group_messages_list);

//Create a new message from one user to the group
router.post('/:group_id/:message_from_id', group_messages_controller.create_new_group_message);

//Get a specific message from the group
router.get('/:group_id/:message_id', group_messages_controller.get_group_message);

//Delete a specific message from the group
router.delete('/:group_id/:message_id', group_messages_controller.delete_group_message);

//Get a specific message's status
router.get('/:group_id/:message_id/status', group_messages_controller.get_group_message_status);

//Update a specific message's status
router.put('/:group_id/:message_id', group_messages_controller.update_group_message_status);

module.exports = router;