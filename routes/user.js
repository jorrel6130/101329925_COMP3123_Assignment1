// Jorrel Tigbayan
// 101329925
// URLs commented above routers

const express = require('express');
const UserModel = require('../models/userSchema');
const router = express.Router();
const mongoose = require('mongoose');

// http://localhost:6130/api/v1/signup POST
router.post('/signup', async (req, res) => {
    try {
        let findUser = await UserModel.find({username: req.body.username});
        let findEmail = await UserModel.find({email: req.body.email});
        if (findUser.length > 0) {
            throw Error("Username is already in use.");
        } else if (findEmail.length > 0) {
            throw Error("Email is already in use.");
        } else {
            let userBody = {
                _id: req.body._id || new mongoose.Types.ObjectId,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        
            let newUser = new UserModel(userBody);
            if (await newUser.save()){
                console.log({message: "User created successfully", userID: newUser._id});
                res.status(201).send({message: "User created successfully", userID: newUser._id})
            }
        }
    }catch(err) {
        console.log({error: err.message});
        res.status(400).send({error: err.message});
    }
});

// http://localhost:6130/api/v1/user/login POST
router.post('/login', async (req, res) => {
    try {
        let findEmail = await UserModel.find({email: req.body.email});
        let findPassword = await UserModel.find({email: req.body.email, password: req.body.password});
        let username = findPassword.map((user) => {return user.username});
        if (findEmail.length === 0) {
            throw Error("Email does not exist.");
        } else if (findPassword.length === 0) {
            throw Error("Invalid password.");
        } else {
            console.log({message: `Login successful. Welcome, ${username}.`})
            res.status(200).send({message: `Login successful. Welcome, ${username}.`});
        }
    }catch(err) {
        console.log({error: err.message});
        res.status(400).send({error: err.message});
    }
});

module.exports = router;