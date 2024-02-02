const UsersRanks = require("../models/ranksmodel")

module.exports={
    postUserRanks:async(req,res)=>{
        const userId = req.user.id;
        const userRank = req.body;
        try {
            finduser  =await UsersRanks.findOne({userId})
            if(!finduser){
                const newUserRank = new  UsersRanks(userRank);
                await newUserRank.save();
                return res.status(201).json({message:"User data Created"})
            }else{
                res.status(400).json({status:false,message:"Old User Data Updated"})
            }
        } catch (error) {
            res.status(500).json({status:false,message:error.message});
        }
    },


    updateregularrank: async(req, res) => {
        const userId = req.user.id; 
        const weekData = req.body; 
        try {
            const findUsers = await UsersRanks.findOne({ userId });
            if (!findUsers) {
                return res.status(403).json({ status: false, message: "No Record Found!" });
            } else {

                findUsers.regularRank.exam5 = findUsers.regularRank.exam4;
                findUsers.regularRank.exam4 = findUsers.regularRank.exam3;
                findUsers.regularRank.exam3 = findUsers.regularRank.exam2;
                findUsers.regularRank.exam2 = findUsers.regularRank.exam1;
                findUsers.regularRank.exam1 = weekData.exam1; 
    
                await findUsers.save(); 

                return res.status(200).json({message:"Data Updated Succesfully"}); 
            }
        } catch (error) {
            res.status(500).json({ status: false, message: error.message });

        }
    },

    updatedailyrank: async(req, res) => {
        const userId = req.user.id; 
        const weekData = req.body; 
        try {
            const findUsers = await UsersRanks.findOne({ userId });
            if (!findUsers) {
                return res.status(403).json({ status: false, message: "No Record Found!" });
            } else {

                findUsers.dailyRank.exam5 = findUsers.dailyRank.exam4;
                findUsers.dailyRank.exam4 = findUsers.dailyRank.exam3;
                findUsers.dailyRank.exam3 = findUsers.dailyRank.exam2;
                findUsers.dailyRank.exam2 = findUsers.dailyRank.exam1;
                findUsers.dailyRank.exam1 = weekData.exam1; 
    
                await findUsers.save(); 
                
                return res.status(200).json({message:"Data Updated Succesfully"}); 
            }
        } catch (error) {
            res.status(500).json({ status: false, message: error.message });
        }
    },

    updateweeklyrank: async(req, res) => {
        const userId = req.user.id; 
        const weekData = req.body; 
        try {
            const findUsers = await UsersRanks.findOne({ userId });
            if (!findUsers) {
                return res.status(403).json({ status: false, message: "No Record Found!" });
            } else {

                findUsers.weeklyRank.exam5 = findUsers.weeklyRank.exam4;
                findUsers.weeklyRank.exam4 = findUsers.weeklyRank.exam3;
                findUsers.weeklyRank.exam3 = findUsers.weeklyRank.exam2;
                findUsers.weeklyRank.exam2 = findUsers.weeklyRank.exam1;
                findUsers.weeklyRank.exam1 = weekData.exam1; 
    
                await findUsers.save(); 
                return res.status(200).json({message:"Data Updated Succesfully"}); 
            }
        } catch (error) {
            res.status(500).json({ status: false, message: error.message });
        }
    },

    getallranks:async(req,res)=>{
        const userId = req.user.id; 
            try {
                const findUsers = await UsersRanks.findOne({ userId });
                if (!findUsers) {
                    return res.status(403).json({ status: false, message: "No Record Found!" });
                } else {
                    return res.status(200).json(findUsers);
                }
        }catch(error){
            res.status(500).json({status:false,message:error.message});
        }
    }
}


// tyanglafat / chadanichowk / bording school /