const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true 
    },
    email:{
        type:String ,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true,
    },
    phone: { 
        type: String, 
        required: false
    },
    userType: {
        type: String, 
        required: true,
        default:"Student",
        enum:['Admin','Student']
    },
    monthlyPackege: {
        type: Boolean,
        default:false,
    },
    weeklyExam: {
        type: Boolean,
        default:false,
    },
    weeklyNumber:{
        type: Number,
        default:0,
    },
    monlhlyNumber:{
        type: Number,
        default:0,
    },
    regularNumber:{
        type:Number,
        default:0,
    }
},
{timestamps:true});
module.exports = mongoose.model('User',UserSchema)