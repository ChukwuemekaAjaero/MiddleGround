/*
* This file is to store all the API routes for the USER route.
* */

const express = require('express');
const router = express.Router();

//HOME PATH
router.get('/', (req, res, next) => {
    res.send('Users');
});

router.get()