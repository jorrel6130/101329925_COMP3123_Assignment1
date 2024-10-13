// Jorrel Tigbayan
// 101329925

const express = require('express');
const EmpModel = require('../models/empSchema');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jorrel6130:u7IoFfOZEgKGRK9h@comp3123assignment1.ckvpn.mongodb.net/?retryWrites=true&w=majority&appName=Comp3123Assignment1");

router.get('/employees', (req, res) => {
    
});

router.post('/employees', (req, res) => {
    
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