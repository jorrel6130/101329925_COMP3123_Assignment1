// Jorrel Tigbayan
// 101329925

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vercel-admin-user:5gGBJuOTJEyUrsCi@comp3123assignment1.ckvpn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

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