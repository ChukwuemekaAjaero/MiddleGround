// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE USERS ROUTE ---------------------

const express = require('express');
const router = express.Router();

//HOME PATH
//TODO: Better organize the order of the routes.
router.get('/', (req, res, next) => {
    res.send('NOT IMPLEMENTED: users GET');
});

//GET User by ID
router.get('/:id', (req, res, next) => {
    res.send('NOT IMPLEMENTED:  users GET by Id');
});

//Register a new user
router.put('/:id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: user POST');
});

//Delete an existing user
router.delete('/:id', (req, res, next) => {
   res.send('NOT IMPLEMENTED: user DELETE');
});

//Change an existing user's role
router.put('/:id/:role', (req, res, next) => {
    res.send('NOT IMPLEMENTED: user PUT role');
});

//Change a user's status
router.put('/:id/:status', (req, res, next) => {
    res.send('NOT IMPLEMENTED: user PUT status');
});

//Change a user's password
router.put('/:id/password', (req, res, next) => {
    res.send('NOT IMPLEMENTED: user PUT password');
});

//Change a user's username
router.put('/:id/username', (req, res, next) => {
    res.send('NOT IMPLEMENTED: user PUT username');
});

//Change a user's first name
router.put('/:id/firstname', (req, res, next) => {
    res.send('NOT IMPLEMENTED: user PUT first name');
});

//Change a user's last name
router.put('/:id/lastname', (req, res, next) => {
    res.send('NOT IMPLEMENTED: user PUT last name');
});


module.exports = router;