// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE MEETINGS ROUTES ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express');
const router = express.Router();
const meetings_controller = require('../../controllers/meetingController')

// --------------------- ROUTES ---------------------
//Home path
router.get('/', meetings_controller.get_meetings_list);

//Get a meeting's information
router.get('/:meeting_id', meetings_controller.get_meeting_information);

//Create a new meeting
router.post('/', meetings_controller.create_new_meeting);

//Update a meeting's information
router.put('/:meeting_id', meetings_controller.update_meeting_information);

//Delete a meeting by its id
router.delete('/:meeting_id', meetings_controller.delete_meeting);

//Get a meeting's users
router.get('/:meeting_id/users', meetings_controller.get_meeting_users);

//Get a meeting's questions
router.get('/meeting_id/questions', meetings_controller.get_meeting_questions);

//Update a meeting's users
router.put('/:meeting_id/users', meetings_controller.update_meeting_users);

//Update a meeting's questions
router.put('/meeting_id/questions', meetings_controller.update_meeting_questions);

module.exports = router;