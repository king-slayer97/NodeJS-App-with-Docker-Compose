const mongoose = require('mongoose');

console.log(`Mongo URL: ${process.env.MONGO_DB_URI}`);
mongoose.connect(`${process.env.MONGO_DB_URI}`);

const db = mongoose.connection;

db.on("error",function(err){
    console.log(`Error in DB connection: ${err}`);
});

db.once("open",function(){
    console.log("Connected to Mongo DB");
});

module.exports = db;