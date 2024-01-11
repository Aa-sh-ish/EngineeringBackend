const Mcq = require('../models/computerQAmodel');
module.exports = {
    createMcq : async (req,res)=>{
        const mcq = req.body;
        console.log(mcq);
        try {
            const newMcq  = new Mcq({
                question: mcq.question,
                option1:mcq.option1,
                option2:mcq.option2,
                option3:mcq.option3,
                option4:mcq.option4,
                rightanswer:mcq.rightanswer,
                hint:mcq.hint
            });
            console.log(newMcq);
            await newMcq.save();
            res.status(201).json({status:true});
        } catch (error) {
            res.status(500).json({status:false,message:error.message})
        }
    },

    getRandomMcqs: async (req, res) => {
        try {
          const allMcqs = await Mcq.find();
          for (let i = allMcqs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allMcqs[i], allMcqs[j]] = [allMcqs[j], allMcqs[i]];
          }
          res.status(200).json(allMcqs);
        } catch (error) {
          res.status(500).json({ status: false, message: error.message });
        }
      }
}