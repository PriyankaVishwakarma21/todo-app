const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const router = require('./routers/ToDoRoutes');
const app =express();

app.use(express.json());
app.use(cors());
app.use('/',router);

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology:true})
        .then(()=>{console.log('connected')})
        .catch((err)=>{console.log(err)});

app.listen(5000,()=>{
    console.log('App is connected with 5000');
})

