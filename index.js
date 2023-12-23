const express = require('express')
const dotenv = require('dotenv')
 const mongoose =  require('mongoose')
 const bodyParser = require('body-parser')
const app = express()
const port = 8848


dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("db connected")).catch((err)=>console.log(err));


const computerQA = require('./routes/computerRoutes');
const electronicsQA = require('./routes/electronicsRoutes');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use('/computer',computerQA);
app.use('/electronics',electronicsQA);
app.use("/hello", (req, res)=>{
    res.send("Hello")
});

app.listen(process.env.PORT||port, () => console.log(`foodly backend listening on port ${process.env.PORT||port}!`));