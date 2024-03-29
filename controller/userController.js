const User = require("../models/usermodel")
const CryptoJS = require('crypto-js')

module.exports={
    getUser: async(req,res)=>{
        const userId = req.user.id;
        try {
            const user = await User.findById({_id:userId},{password:0, _v:0,createdAt:0,updatedAt:0});
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({message:"Error Retriving user",message:error.message})
        }
    },

    deleteUser: async(req,res)=>{
        const userId = req.user.id;
        try {
            await User.findByIdAndDelete(userId)
            res.status(200).json({status:true,message:"User Deleted Successfully "})
        } catch (error) {
            res.status(500).json({message:"Error Deleting User",error:error.message})
        }
    },

    updateUserPassword: async (req, res) => {
        const {email, newPassword} = req.body;
        console.log(newPassword);
        try {
            const user = await User.findOne({email: email});
            if (!user) {
                return res.status(404).json({message: "User not Exist Please resister"});
            }
            
            const encryptedNewPassword = CryptoJS.AES.encrypt(newPassword, process.env.SECRET).toString();

            user.password = encryptedNewPassword;
            await user.save();
            res.status(200).json({message: "Password updated successfully Yor are good to login"});
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find({}, { password: 0, __v: 0, createdAt: 0, updatedAt: 0 });

            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error fetching users" });
        }
    },

    updateUserRegularNumber: async (req, res) => {
        const userId = req.user.id; // Assuming you have the user's ID from the request (e.g., through authentication middleware)
        const { newNumber } = req.body; // The additional number to add to the regularNumber
        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const updatedRegularNumber = user.regularNumber + parseInt(newNumber, 10);
        user.regularNumber = updatedRegularNumber;
            await user.save();
            res.status(200).json({message: "Rank updated successfully"});
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error updating regularNumber"});
        }
    },
}