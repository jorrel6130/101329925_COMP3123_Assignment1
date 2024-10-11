// Jorrel Tigbayan
// 101329925

const express = require('express');
const router = express.Router();

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