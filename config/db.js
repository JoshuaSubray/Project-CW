
const mongoose = require('mongoose');

const uri = 'mongodb+srv://jamesgriffiths23:1054g087@central.r9mof.mongodb.net/userAuth';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

const loginUri = 'mongodb+srv://jamesgriffiths23:1054g087@central.r9mof.mongodb.net/loginDB';
const loginConnection = mongoose.createConnection(loginUri, { useNewUrlParser: true, useUnifiedTopology: true });

loginConnection.on('connected', () => console.log('Connected to MongoDB Login'));
loginConnection.on('error', err => console.error('Error connecting to Login MongoDB', err));

module.exports = { mongoose, loginConnection };