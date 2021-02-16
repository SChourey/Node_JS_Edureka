require('dotenv').config()
const mongoose = require('mongoose');

const mongoUri = `mongodb://${process.env.db_service_name}:${process.env.mongo_port}/${process.env.db_name}`;

mongoose.connect( mongoUri, 
    { useNewUrlParser: true }).then(()=>{
        console.log("Connected to Database")
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    })
