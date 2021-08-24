const express = require('express');
const {
    addUser, 
    getAllUsers, 
    getUser, 
    updateUser,
    deleteUser
} = require ('../controllers/UserController');

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/register', addUser);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = {
    routes: router
};