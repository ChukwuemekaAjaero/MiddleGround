// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE DIRECT MESSAGES ROUTES ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express')
const router = express.Router()
const directMessagesController = require('../../../controllers/directMessagesController')

// --------------------- ROUTES ---------------------
// Home Path
// TODO: Better organize the order of the routes.
router.get('/', directMessagesController.directMessagesList)

// Get all the messages from a user to another user
// TODO: Figure out if this is the right way to structure a route where there
router.get('/:message_from_id/:message_to_id', directMessagesController.directMessagesUserToUserList)

// Create a new message from one user to another
router.post('/:message_from_id/:message_to_id', directMessagesController.createNewDirectMessage)

// Get a specific message from its ID.
router.get('/:message_id', directMessagesController.getDirectMessage)

// Delete a specific message
router.delete('/:message_id', directMessagesController.deleteDirectMessage)

// Get a message's status
router.get('/:message_id/status', directMessagesController.getDirectMessageStatus)

// Update a message's status
router.put('/:message_id/status', directMessagesController.updateDirectMessageStatus)

module.exports = router
