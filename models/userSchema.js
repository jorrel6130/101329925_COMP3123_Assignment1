// Jorrel Tigbayan
// 101329925

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, default: new mongoose.Types.ObjectId},
    username: {type: String, required: true},
    email: {type: String, required: true, trim: true, lowercase: true},
    password: {type: String, required: true, trim: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

const User  = mongoose.model("user", UserSchema);
module.exports = User;