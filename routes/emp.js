// Jorrel Tigbayan
// 101329925

const express = require('express');
const EmpModel = require('../models/empSchema');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jorrel6130:u7IoFfOZEgKGRK9h@comp3123assignment1.ckvpn.mongodb.net/?retryWrites=true&w=majority&appName=Comp3123Assignment1");

router.get('/employees', async (req, res) => {
    let allEmps = await EmpModel.find({});
    res.send(allEmps);
});

router.post('/employees', async (req, res) => {
    try {
        let findEmp = await EmpModel.find({first_name: req.body.first_name, last_name: req.body.last_name});
        if (findEmp.length > 0) {
            throw Error("Employee already recorded, please update instead.");
        } else {
            let empBody = {
                _id: new mongoose.Types.ObjectId,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                position: req.body.position,
                salary: req.body.salary,
                date_of_joining: req.body.date_of_joining,
                department: req.body.department,
            }
        
            let newEmp = new EmpModel(empBody);
            if (await newEmp.save()){
                console.log({message: "Employee recorded successfully", employee_id: newEmp._id});
                res.status(200).send({message: "Employee recorded successfully", emploeyee_id: newEmp._id})
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