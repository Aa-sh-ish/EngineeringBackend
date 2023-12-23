const mongoose = require('mongoose')
const ComputerQA
 = new mongoose.Schema({
    question: {
        type: String,
        required: true 
    },
    option1:{
        type:String ,
        required:true,
        unique:true
    },
    option2: {
        type: String,
        required: true,
    },
    option3: {
        type: String, 
        required: true
    },
    option4: { 
        type: String, 
        required: true
    },
    rightanswer: {
        type: String, 
        required:true,
    },
    hint:{
        type:String,
        required:false
    }
});
const Mcq = mongoose.model('Computer', ComputerQA);

module.exports = Mcq;