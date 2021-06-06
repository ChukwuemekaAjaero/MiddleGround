// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE USERS ROUTE ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express');
const router = express.Router();
const users_controller = require('../../controllers/usersController');

// --------------------- ROUTES ---------------------
//HOME PATH
//TODO: Better organize the order of the routes.
router.get('/', users_controller.users_list);

//GET User by ID
router.get('/:id', users_controller.user_by_id);

//Register a new user
router.put('/:id', users_controller.register_user);

//Delete an existing user
router.delete('/:id', users_controller.delete_user);

//Change an existing user's role
router.put('/:id/:role', users_controller.update_user_role);

//Change a user's status
router.put('/:id/:status', users_controller.update_user_status);

//Change a user's password
router.put('/:id/password', users_controller.update_user_password);

//Change a user's username
router.put('/:id/username', users_controller.update_user_username);

//Change a user's first name
router.put('/:id/firstname', users_controller.update_user_first_name);

//Change a user's last name
router.put('/:id/lastname', users_controller.update_user_last_name);

module.exports = router;