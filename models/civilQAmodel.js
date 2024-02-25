const mongoose = require('mongoose')
const CivilQA
 = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        unique:true,
    },
    option1:{
        type:String ,
        required:true,
        unique:false

    },
    option2: {
        type: String,
        required: true,
        unique:false

    },
    option3: {
        type: String, 
        required: true,
        unique:false

    },
    option4: { 
        type: String, 
        required: true,
        unique:false,

    },
    rightanswer: {
        type: String, 
        required:true,
        unique:false

    },
    hint:{
        type:String,
        required:false,
        unique:false

    }
});
const Mcq = mongoose.model('Civil', CivilQA);

module.exports = Mcq;