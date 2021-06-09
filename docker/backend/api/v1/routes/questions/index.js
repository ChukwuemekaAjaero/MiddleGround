// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE QUESTIONS ROUTES ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express')
const router = express.Router()
const questionsController = require('../../controllers/questionsController')

// --------------------- ROUTES ---------------------
// Home Path
router.get('/', questionsController.getQuestionsList)

// Get question by ID
router.get('/:question_id', questionsController.getQuestion)

// Create a question
router.post('/', questionsController.createNewQuestion)

// Update a question
router.put('/:question_id', questionsController.updateQuestion)

// Delete a question
router.delete('/:question_id', questionsController.deleteQuestion)

// Get tags relating to a question
router.get('/:question_id/tags', questionsController.getQuestionTags)

// Update a question's tag
router.post('/:question_id/tags', questionsController.updateQuestionTags)

module.exports = router
