const mongoose = require('mongoose')
const UserRankSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,ref:'User',
        required: true
    },
    regularRank:{
        exam1:{type:Number,default:0},
        exam2:{type:Number,default:0},
        exam3:{type:Number,default:0},
        exam4:{type:Number,default:0},
        exam5:{type:Number,default:0}
    },
    dailyRank:{
        exam1:{type:Number,default:0},
        exam2:{type:Number,default:0},
        exam3:{type:Number,default:0},
        exam4:{type:Number,default:0},
        exam5:{type:Number,default:0}
    },
    weeklyRank:{
        exam1:{type:Number,default:0},
        exam2:{type:Number,default:0},
        exam3:{type:Number,default:0},
        exam4:{type:Number,default:0},
        exam5:{type:Number,default:0}
    },
},
{timestamps:true});
module.exports = mongoose.model('UserRanks',UserRankSchema)