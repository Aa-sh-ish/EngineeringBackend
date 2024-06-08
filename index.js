const express = require('express')
const dotenv = require('dotenv')
 const mongoose =  require('mongoose')
 const bodyParser = require('body-parser')
const port = 8848
const cors = require('cors');

const app = express();
app.use(cors());
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("db connected")).catch((err)=>console.log(err));

const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoute')
const computerQA = require('./routes/computerRoutes');
const electronicsQA = require('./routes/electronicsRoutes');
const civilQA = require("./routes/civilRoutes");
const rankRouter = require('./routes/userRanks');






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use('/',authRouter);
app.use('/api/users',userRouter);
app.use('/computer',computerQA);
app.use('/electronics',electronicsQA);
app.use('/civil',civilQA);
app.use('/aip/ranks',rankRouter);
app.use("/hello", (req, res)=>{
    res.send("Hello")
});

app.listen(process.env.PORT||port, () => console.log(`foodly backend listening on port ${process.env.PORT||port}!`));