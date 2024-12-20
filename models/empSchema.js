// Jorrel Tigbayan
// 101329925

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vercel-admin-user:5gGBJuOTJEyUrsCi@comp3123assignment1.ckvpn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const EmpSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, default: new mongoose.Types.ObjectId},
    first_name: {type: String, required: true, trim: true},
    last_name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true, lowercase: true},
    position: {type: String, trim: true, lowercase: true},
    salary: [Number],
    date_of_joining: {type: Date, required: true},
    department: {type: String, trim: true, lowercase: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

const Emp  = mongoose.model("emp", EmpSchema);
module.exports = Emp;