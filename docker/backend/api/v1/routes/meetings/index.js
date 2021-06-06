// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE MEETINGS ROUTES ---------------------

const express = require('express');
const router = express.Router();

//Home path
router.get('/', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meetings GET');
});

//Get a meeting's information
router.get('/:meeting_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meeting GET by id');
});

//Create a new meeting
router.post('/', (req, res, next) => {
    res.send('NOT IMPLEMENTEND: meeting POST');
});

//Update a meeting's details
router.put('/:meeting_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meeting PUT updated');
});

//Delete a meeting by its id
router.delete('/:meeting_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meeting DELETE');
});

//Get a meeting's users
router.get('/:meeting_id/users', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meeting GET users');
});

//Get a meeting's questions
router.get('/meeting_id/questions', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meeting GET questions');
});

//Update a meeting's users
router.put('/:meeting_id/users', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meeting GET users');
});

//Update a meeting's questions
router.put('/meeting_id/questions', (req, res, next) => {
    res.send('NOT IMPLEMENTED: meeting GET questions');
});

module.exports = router;