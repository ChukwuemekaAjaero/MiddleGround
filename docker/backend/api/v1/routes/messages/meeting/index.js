// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE MEETING MESSAGES ROUTES ---------------------

const express = require('express');
const router = express.Router();

//Home Path
//TODO: Better organize the order of the routes
router.get('/', (res, req, next) => {
    res.send('NOT IMPLEMENTED: meeting messages GET');
});

//Get all the messages from a meeting using its id
router.get('/:meeting_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: meeting_id messages GET');
});

//Create a new message from one user to the meeting chat
router.post('/:meeting_id/:message_from_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: meeting_id POST from message_from_id');
});

//Get a specific message from the meeting chat
router.get('/:meeting_id/:message_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: meeting_id GET message_id');
});

//Delete a specific message from the meeting chat
router.delete('/:meeting_id/:message_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meeting_id DELETE message_id');
});

//Get a specific message's status
router.get('/:meeting_id/:message_id/status', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meeting_id GET message_id status');
});

//Update a specific message's status
router.put('/:meeting_id/:message_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meeting_id PUT message_id status');
});


module.exports = router;