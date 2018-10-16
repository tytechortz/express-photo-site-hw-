const mongoose = require('mongoose');

const connectionString = "mongodb://localhost/photo_users";

mongoose.connect(connectionString, { useNewUrlParser: true});

mongoose.connection.on('connected', ()=>{
    console.log("Mongoose connected to ${connectionString}");
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
    console.log(err, 'mongoose error');
});