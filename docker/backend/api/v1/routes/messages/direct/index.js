// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE DIRECT MESSAGES ROUTES ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express');
const router = express.Router();
const direct_messages_controller = require('../../../controllers/directMessagesController');

// --------------------- ROUTES ---------------------
//Home Path
//TODO: Better organize the order of the routes.
router.get('/', direct_messages_controller.direct_messages_list);

//Get all the messages from a user to another user
//TODO: Figure out if this is the right way to structure a route where there
router.get('/:message_from_id/:message_to_id', direct_messages_controller.direct_messages_user_to_user_list);

//Create a new message from one user to another
router.post('/:message_from_id/:message_to_id', direct_messages_controller.create_new_direct_message);

//Get a specific message from its ID.
router.get('/:message_id', direct_messages_controller.get_direct_message);


//Delete a specific message
router.delete('/:message_id', direct_messages_controller.delete_direct_message);

//Get a message's status
router.get('/:message_id/status', direct_messages_controller.get_direct_message_status);

//Update a message's status
router.put('/:message_id/status', direct_messages_controller.update_direct_message_status);

module.exports = router;