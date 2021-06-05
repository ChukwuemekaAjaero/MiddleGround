// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE TAGS ROUTES ---------------------

const express = require('express');
const router = express.Router();

//Home Path
router.get('/', (res, req, next) => {
    res.send('NOT IMPLEMENTED: tags GET');
});

//Get tag by its ID
router.get('/:tag_id', (res, req, next) => {
    res.send('NOT IMPLEMENTED: tag GET by id');
});

//Create a tag
router.post('/', (res, req, next) => {
    //Can only be done by authorised users.
    res.send('NOT IMPLEMENTED: tag POST');
});

//Update a tag by its ID
router.put('/:tag_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: tag PUT updated')
})

//Delete a tag by its ID
router.delete('/:tag_id', (req, res, next) => {
    res.send('NOT IMPLEMENTED: tag DELETE');
});

module.exports = router;