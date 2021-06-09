// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE GROUP MESSAGES ROUTES ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express')
const router = express.Router()
const groupMessagesController = require('../../../controllers/groupMessagesController')

// --------------------- ROUTES ---------------------

// Home Path
// TODO: Better organize the order of the routes
router.get('/', groupMessagesController.groupMessagesList)

// Get all the messages from a group using its id
router.get('/:group_id', groupMessagesController.getGroupMessagesList)

// Create a new message from one user to the group
router.post('/:group_id/:message_from_id', groupMessagesController.createNewGroupMessage)

// Get a specific message from the group
router.get('/:group_id/:message_id', groupMessagesController.getGroupMessage)

// Delete a specific message from the group
router.delete('/:group_id/:message_id', groupMessagesController.deleteGroupMessage)

// Get a specific message's status
router.get('/:group_id/:message_id/status', groupMessagesController.getGroupMessageStatus)

// Update a specific message's status
router.put('/:group_id/:message_id', groupMessagesController.updateGroupMessageStatus)

module.exports = router
