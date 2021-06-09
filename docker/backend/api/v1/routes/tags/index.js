// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE TAGS ROUTES ---------------------

const express = require('express')
const router = express.Router()
const tagsController = require('../../controllers/tagsController')

// Home Path
router.get('/', tagsController.getTagsList)

// Get tag by its ID
router.get('/:tag_id', tagsController.getTag)

// Create a tag
router.post('/', tagsController.createNewTag)

// Update a tag by its ID
router.put('/:tag_id', tagsController.updateTag)

// Delete a tag by its ID
router.delete('/:tag_id', tagsController.deleteTag)

module.exports = router
