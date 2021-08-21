'use strict';

const firebase = require('./../db');
const User = require('../models/user');
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
    try {
        const data = req.body;

        console.log('salve')
        await firestore.collection('users').doc().set(data);
        res.status(200).send('Record Saved Sucessfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await firestore.collection('users');
        const data = await users.get();
        const usersArray = [];
        if(data.empty) {
            res.status.send(400).send('No users record found');
        }else{
            data.forEach(doc => {
                const user = new User(
                    doc.id,
                    doc.data().name,
                    doc.data().login,
                    doc.data().password,
                    doc.data().email,
                    doc.data().status
                );
                usersArray.push(user);
            });
            res.send(usersArray);
        }
    }catch (err) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser,
    getAllUsers
}