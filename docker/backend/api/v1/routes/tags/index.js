// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE TAGS ROUTES ---------------------

const express = require('express');
const router = express.Router();
const tags_controller = require('../../controllers/tagsController');

//Home Path
router.get('/', tags_controller.get_tags_list);

//Get tag by its ID
router.get('/:tag_id', tags_controller.get_tag);

//Create a tag
router.post('/', tags_controller.create_new_tag);

//Update a tag by its ID
router.put('/:tag_id', tags_controller.update_tag);

//Delete a tag by its ID
router.delete('/:tag_id', tags_controller.delete_tag);

module.exports = router;