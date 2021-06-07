// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE QUESTIONS ROUTES ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express');
const router = express.Router();
const questions_controller = require('../../controllers/questionsController');

// --------------------- ROUTES ---------------------
//Home Path
router.get('/', questions_controller.get_questions_list);

//Get question by ID
router.get('/:question_id', questions_controller.get_question);

//Create a question
router.post('/', questions_controller.create_new_question);

//Update a question
router.put('/:question_id', questions_controller.update_question);

//Delete a question
router.delete('/:question_id', questions_controller.delete_question);

//Get tags relating to a question
router.get('/:question_id/tags', questions_controller.get_question_tags);

//Update a question's tag
router.post('/:question_id/tags', questions_controller.update_question_tags);

module.exports = router;