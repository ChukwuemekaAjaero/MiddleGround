// --------------------- THIS MODULE IS TO STORE ALL THE API ROUTES FOR THE USERS ROUTE ---------------------

// --------------------- CONSTANTS  ---------------------
const express = require('express')
const router = express.Router()
const usersController = require('../../controllers/usersController')

// --------------------- ROUTES ---------------------
// HOME PATH
// TODO: Better organize the order of the routes.
router.get('/', usersController.usersList)

// GET User by ID
router.get('/:id', usersController.userById)

// Register a new user
router.put('/:id', usersController.registerUser)

// Delete an existing user
router.delete('/:id', usersController.deleteUser)

// Change an existing user's role
router.put('/:id/:role', usersController.updateUserRole)

// Change a user's status
router.put('/:id/:status', usersController.updateUserStatus)

// Change a user's password
router.put('/:id/password', usersController.updateUserPassword)

// Change a user's username
router.put('/:id/username', usersController.updateUserUsername)

// Change a user's first name
router.put('/:id/firstname', usersController.updateUserFirstName)

// Change a user's last name
router.put('/:id/lastname', usersController.updateUserLastName)

module.exports = router
