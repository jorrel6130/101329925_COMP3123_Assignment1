// Jorrel Tigbayan
// 101329925

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, default: new mongoose.Types.ObjectId},
    username: String,
    email: String,
    password: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

const User  = mongoose.model("user", UserSchema);
module.exports = User;