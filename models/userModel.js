const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//bir collection oluşturulduğunda önceden verilen şemadaki verileri hatırlıyor.....
const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 20
    },
    phoneNumber: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    } 
});

const ModelUser = mongoose.model('User', userSchema);

module.exports = ModelUser;