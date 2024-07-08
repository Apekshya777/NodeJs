const mongoose = require ("mongoose")

async function connectToDB(){
   await mongoose.connect("mongodb+srv://apeksha:helloworld@cluster0.wqvkqxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("database connected");
}
module.exports = connectToDB;