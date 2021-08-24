'use strict';

const firebase = require('./../db');
const User = require('../models/user');
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
    try {
        const data = req.body;

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

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send("User with the given ID not found");
        } else {
            res.send(data.data());
        }
    } catch (err) {
        res.status(400).send(error.message);
    }
}

const  updateUser= async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user = await firestore.collection('users').doc(id);
        await user.update(data);
        res.send('Student record updated successfuly');
    } catch(err) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async(req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('users').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (err) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}