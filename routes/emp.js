// Jorrel Tigbayan
// 101329925

const express = require('express');
const EmpModel = require('../models/empSchema');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jorrel6130:u7IoFfOZEgKGRK9h@comp3123assignment1.ckvpn.mongodb.net/?retryWrites=true&w=majority&appName=Comp3123Assignment1");

router.get('/employees', async (req, res) => {
    let allEmps = await EmpModel.find({});
    console.log(allEmps);
    res.send(allEmps);
});

router.post('/employees', async (req, res) => {
    try {
        let findEmp = await EmpModel.find({first_name: req.body.first_name, last_name: req.body.last_name});
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
        
            let newUser = new EmpModel(userBody);
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

router.get('/employees/:eid/', (req, res) => {
    
    let eid = req.params.eid;

})

router.put('/employees/:eid/', (req, res) => {
    
    let eid = req.params.eid;

})

router.delete('/employees/', (req, res) => {
    
    let eid = req.query.eid;

})

module.exports = router;