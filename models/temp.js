const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    userID: String,
    userName: String,
    userRole: String,
    INT: 0,
    REF: 0,
    DEX: 0,
    COOL: 0,
    TECH: 0,
    LUCK: 0,
    WILL: 0,
    MOVE: 0,
    EMP: 0,
    BODY: 0,
    charapoints: 0,
    BTM: 0,
    statSelect: 0,
    lifepath: []
});

const MessageModel = module.exports = mongoose.model('Temp', DataSchema);

