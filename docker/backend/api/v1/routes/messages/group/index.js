// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE GROUP MESSAGES ROUTES ---------------------

const express = require('express');
const router = express.Router();

//Home Path
//TODO: Better organize the order of the routes
router.get('/', (res, req, next) => {
    res.send('NOT IMPLEMENTED: group messages GET');
});

//Get all the messages from a group using its id
router.get('/:group_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: group_id messages GET');
});

//Create a new message from one user to the group
router.post('/:group_id/:message_from_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: group_id POST from message_from_id');
});

//Get a specific message from the group
router.get('/:group_id/:message_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: group_id GET message_id');
});

//Delete a specific message from the group
router.delete('/:group_id/:message_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: group_id DELETE message_id');
});

//Get a specific message's status
router.get('/:group_id/:message_id/status', (req, res, next) => {
    res.send('NOT IMPLEMENTED: group_id GET message_id status');
});

//Update a specific message's status
router.put('/:group_id/:message_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: group_id PUT message_id status');
});


module.exports = router;