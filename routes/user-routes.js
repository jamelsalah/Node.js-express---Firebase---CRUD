const express = require('express');
const {addUser, getAllUsers} = require ('../controllers/UserController');

const router = express.Router();

router.get('/users', getAllUsers)
router.post('/user', addUser);

module.exports = {
    routes: router
};