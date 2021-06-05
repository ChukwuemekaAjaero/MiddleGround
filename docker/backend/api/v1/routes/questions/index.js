// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE QUESTIONS ROUTES ---------------------

const express = require('express');
const router = express.Router();

//Home Path
router.get('/', (res, req, next) => {
   res.send('NOT IMPLEMENTED: questions GET');
});

//Get question by ID
router.get('/:question_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: questions GET by id');
});

//Create a question
router.post('/', (res, req, next) => {
    res.send('NOT IMPLEMENTED: question POST created');
});

//Update a question
router.put('/:question_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: question PUT updated')
})

//Delete a question
router.delete('/:question_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: question DELETE');
});

//Get tags relating to a question
router.get('/:question_id/tags', (req, res, next) => {
   res.send('NOT IMPLEMENTED: questions GET tags');
});

//Update a question's tag
router.post('/:question_id/tags', (req, res, next) => {
    res.send('NOT IMPLEMENTED: questions POST tags');
});

module.exports = router;