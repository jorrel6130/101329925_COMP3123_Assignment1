// Jorrel Tigbayan
// 101329925

const mongoose = require('mongoose');

const EmpSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, default: new mongoose.Types.ObjectId},
    first_name: String,
    last_name: String,
    email: String,
    position: String,
    salary: [Number],
    date_of_joining: [Date],
    department: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

const Emp  = mongoose.model("emp", EmpSchema);
module.exports = Emp;