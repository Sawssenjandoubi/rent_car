const express = require ("express");
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const route = require('./routes/route')
const path = require("path");
require("dotenv").config()
const uri = process.env.uri
mongoose.connect(
    uri,
    {useNewUrlParser: true,useUnifiedTopology: true},

    
    (err)=>{
        if (err) throw err;
        console.log('connected to database successfully')
    });

app.use(express.json())
app.use('/api',route)
//multer middleware
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port,function(){
    console.log(`the server is runnig in the port ${port}, open your browser at http://localhost:${port}`)
});