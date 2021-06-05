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
    res.send('NOT IMPLEMENTED: tag POST')
})

module.exports = router;