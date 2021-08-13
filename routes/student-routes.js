const express = require('express');
const {addUser, getAllUsers} = require ('../controllers/studentsController');

const router = express.Router();
router.get('/users', getAllUsers)

router.post('/user', addUser);

module.exports = {
    routes: router
}