// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE MEETINGS ROUTES ---------------------

// --------------------- CONSTANTS  ----------------------
const express = require('express')
const router = express.Router()
const meetingsController = require('../../controllers/meetingController')

// --------------------- ROUTES ---------------------
// Home path
router.get('/', meetingsController.getMeetingsList)

// Get a meeting's information
router.get('/:meeting_id', meetingsController.getMeetingInformation)

// Create a new meeting
router.post('/', meetingsController.createNewMeeting)

// Update a meeting's information
router.put('/:meeting_id', meetingsController.updateMeetingInformation)

// Delete a meeting by its id
router.delete('/:meeting_id', meetingsController.deleteMeeting)

// Get a meeting's users
router.get('/:meeting_id/users', meetingsController.getMeetingUsers)

// Get a meeting's questions
router.get('/meeting_id/questions', meetingsController.getMeetingQuestions)

// Update a meeting's users
router.put('/:meeting_id/users', meetingsController.updateMeetingUsers)

// Update a meeting's questions
router.put('/meeting_id/questions', meetingsController.updateMeetingQuestions)

module.exports = router
