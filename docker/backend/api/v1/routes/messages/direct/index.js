// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE DIRECT MESSAGES ROUTES ---------------------

const express = require('express');
const router = express.Router();

//Home Path
//TODO: Better organize the order of the routes.
router.get('/', (req, res, next) => {
    res.send('NOT IMPLEMENTED: direct messages GET');
});

//Get all the messages from a user to another user
//TODO: Figure out if this is the right way to structure a route where there
router.get('/:message_from_id/:message_to_id', (req, res, next) => {
   /*
   * An interesting thing to think about here is how to "lazy load" the messages. You wouldn't want to load every single
   * message all at once when that's not what's needed.
   * https://stackoverflow.com/questions/53241157/how-to-add-query-parameters-to-router-get
   * */
    res.send('NOT IMPLEMENTED: message from -> to GET');
});

//Create a new message from one user to another
router.post('/:message_from_id/:message_to_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: message from -> to POST');
});

//Get a specific message from its ID.
router.get('/:message_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: message_id GET');
});


//Delete a specific message
router.delete('/:message_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: message_id DELETE');
});

//Get a message's status
router.get('/:message_id/status', (req, res, next) => {
   res.send('NOT IMPLEMENTED: message_id GET status');
});

//Update a message's status
router.put('/:message_id/status', (req, res, next) => {
    res.send('NOT IMPLEMENTED: message_id PUT status');
})

module.exports = router;