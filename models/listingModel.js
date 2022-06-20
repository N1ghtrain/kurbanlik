const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        default: "-"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    //ilan oluşturulduğundaki tarih, sıralama için
    createdAt: {
        type: Date,
        default: Date.now()
    } 
});

const ModelListing = mongoose.model('Listing', listingSchema);

module.exports = ModelListing;