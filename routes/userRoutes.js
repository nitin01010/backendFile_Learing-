const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { checkHeaderKey } = require('../middleware/authMiddleware');


router.get('/', checkHeaderKey, userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
