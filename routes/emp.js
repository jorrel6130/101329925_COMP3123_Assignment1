// Jorrel Tigbayan
// 101329925
// URLs commented above routers

const express = require('express');
const EmpModel = require('../models/empSchema');
const router = express.Router();
const mongoose = require('mongoose');

// http://localhost:6130/api/v1/employees GET
router.get('/employees', async (req, res) => {
    console.log("Attempting...")
    let allEmps = await EmpModel.find({});
    res.status(200).send(allEmps);
});

// http://localhost:6130/api/v1/employees POST
router.post('/employees', async (req, res) => {
    try {
        let findEmp = await EmpModel.find({first_name: req.body.first_name, last_name: req.body.last_name});
        if (findEmp.length > 0) {
            throw Error("Employee already recorded, please update instead.");
        } else {
            let empBody = {
                _id: req.body._id || new mongoose.Types.ObjectId,
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
                res.status(201).send({message: "Employee recorded successfully", emploeyee_id: newEmp._id})
            }
        }
    }catch(err) {
        console.log({error: err.message});
        res.status(400).send({error: err.message});
    }
});

// http://localhost:6130/api/v1/employees/:field/:search GET
router.get('/employees/:field/:search', async (req, res) => {
    
    let field = req.params.field;
    let search = req.params.search;
    let findEmps;

    try {
        if (findEmps = await EmpModel.find({field: search})) {
            res.status(200).send(`all fields in ${field} found with value ${search}`);
        } else {
            throw Error("Employee is not recorded.")
        }
    }catch(err) {
        console.log({error: err.message});
        res.status(400).send({error: err.message});
    }

})

// http://localhost:6130/api/v1/employees/_id GET
router.get('/employees/:eid/', async (req, res) => {
    
    let eid = {_id: req.params.eid};
    let findEmp;

    try {
        if (findEmp = await EmpModel.findById(eid)) {
            res.status(200).send(findEmp);
        } else {
            throw Error("Employee is not recorded.")
        }
    }catch(err) {
        console.log({error: err.message});
        res.status(400).send({error: err.message});
    }

})

// http://localhost:6130/api/v1/employees/_id PUT
router.put('/employees/:eid/', async (req, res) => {
    
    let eid = {_id: req.params.eid};
    let update = req.body;
    let updateEmp;

    try {
        if (updateEmp = await EmpModel.findOneAndUpdate(eid, update)){
            updateEmp = await EmpModel.findOneAndUpdate(eid, {updated_at: new Date});
            res.status(200).send({message: "Employee details updated successfully"});
        } else {
            throw Error("Employee is not recorded or cannot be updated.");
        }
    }catch(err) {
        console.log({error: err.message});
        res.status(400).send({error: err.message});
    }

})

// http://localhost:6130/api/v1/employees DELETE
router.delete('/employees', async (req, res) => {
    
    let eid = {_id: req.query.eid};
    let deleteEmp;

    try {
        if (deleteEmp = await EmpModel.findOneAndDelete(eid)){
            
            res.status(202).send({message: "Employee record successfully deleted."})
        } else {
            throw Error("Employee is not recorded.");
        }
    }catch(err) {
        console.log({error: err.message});
        res.status(400).send({error: err.message});
    }

})

module.exports = router;