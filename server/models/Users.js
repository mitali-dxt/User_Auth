const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email: String,
    password: String
});

const UserModel = mongoose.model("users", userSchema);
module.exports= UserModel;