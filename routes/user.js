// Jorrel Tigbayan
// 101329925

const express = require('express');
const UserModel = require('../models/userSchema');
const router = express.Router();
const mongoose = require('mongoose');
const DB_CONNECTION_STRING=""
mongoose.connect("mongodb+srv://jorrel6130:u7IoFfOZEgKGRK9h@comp3123assignment1.ckvpn.mongodb.net/?retryWrites=true&w=majority&appName=Comp3123Assignment1");

router.post('/signup', async (req, res) => {
    try {
        let findUser = await UserModel.find({username: req.body.username});
        let findEmail = await UserModel.find({email: req.body.email});
        console.log(findEmail);
        if (findUser.length > 0) {
            throw Error("Username is already in use.");
        } else if (findEmail.length > 0) {
            throw Error("Email is already in use.");
        } else {
            let userBody = {
                _id: new mongoose.Types.ObjectId,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        
            let newUser = new UserModel(userBody);
            console.log(newUser);
            if (await newUser.save()){
                console.log({message: "User created successfully", userID: newUser._id});
                res.status(200).send({message: "User created successfully", userID: newUser._id})
            }
        }
    }catch(err) {
        console.log(err);
        res.status(400).send(`${err}`);
    }
});

router.post('/login', async (req, res) => {
    console.log(req.body);
    try {
        let findEmail = await UserModel.find({email: req.body.email});
        let findPassword = await UserModel.find({email: req.body.email, password: req.body.password});
        console.log(findPassword);
        if (findEmail.length === 0) {
            throw Error("Email does not exist.");
        } else if (findPassword.length === 0) {
            throw Error("Invalid password.");
        } else {
            console.log({message: "Login successful."})
            res.status(200).send({message: "Login Successful"})
        }
    }catch(err) {
        console.log(err);
        res.status(400).send(`${err}`);
    }
});

module.exports = router;